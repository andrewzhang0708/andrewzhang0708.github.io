#!/usr/bin/env bash

set -euo pipefail

show_usage() {
  cat <<'EOF'
Usage: ./update.sh -m "commit message"

Options:
  -m    Commit message to use for git commit
  -h    Show this help text
EOF
}

commit_message=""

while getopts ":m:h" option; do
  case "$option" in
    m)
      commit_message="$OPTARG"
      ;;
    h)
      show_usage
      exit 0
      ;;
    \?)
      echo "Unknown option: -$OPTARG" >&2
      show_usage >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires a value." >&2
      show_usage >&2
      exit 1
      ;;
  esac
done

if [[ -z "$commit_message" ]]; then
  echo "Missing commit message." >&2
  show_usage >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This directory is not inside a git repository." >&2
  exit 1
fi

git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

git commit -m "$commit_message"
git push origin HEAD