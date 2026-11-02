AGENTS.md — Andrew Zhang's Research & Creative Portfolio
Project purpose
This repository is Andrew Zhang's personal academic and creative portfolio. It is intended primarily for prospective Ph.D. advisors and admissions committees in Computational Media, HCI, Creative Technologies, Interactive Narrative, and Human-AI Creativity, as well as potential artistic collaborators.

The website should demonstrate a coherent combination of:
1. Technical capability — building functioning software, XR prototypes, and AI-integrated systems.
2. Creative practice — theater, directing, performance, and interactive storytelling.
3. Research thinking — asking focused questions, making defensible design choices, and reflecting critically on their implications.
Do not present Andrew as exclusively a “VR theater researcher.” Theater is an important starting point, but his wider interests include creativity support tools, authoring systems, expressive interaction, embodied experiences, interactive narratives, and how computing affects human expression and meaning-making.
Voice and visual identity
- Voice: clear, personal, intellectually curious, warm, and professional. Prefer precise, accessible English over buzzwords or exaggerated academic language.
- Visual direction: minimalist, contemporary, spacious, readable, with an understated artistic sensibility. Keep the existing site's visual language unless asked to redesign it.
- Suggested headline/tagline (may be changed by the user): Computing × Creativity → Interactive Authoring → New Forms of Storytelling.
- Avoid generic corporate marketing copy, heavy animations, excessive gradients, and decorative visuals that distract from the work.
- Favor concrete evidence, short descriptions, purposeful imagery, and easy-to-find demos, papers, code, and role descriptions.
- Mobile usability and accessible reading experiences are as important as desktop polish.
Verified background: use accurately
- Name: Andrew Zhang (also uses Andrew (Chi) Zhang in academic materials).
- Education: University of California, Santa Barbara; B.S. Computer Science, B.A. Mathematics, B.A. Theater (Directing); expected graduation June 2027.
- Research affiliation: Undergraduate researcher at UCSB Four Eyes Lab, advised by Prof. Tobias Höllerer.
- Technical experience: Unity/C#, Meta Quest 3 VR prototyping and hand tracking; Python/FastAPI, PostgreSQL/Supabase, Gemini integration, sentence-transformer-based semantic search, OpenCV; Go backend development during a Baidu internship.
- Theater experience: Acting and directing at UCSB; professional work with Prague Shakespeare Company, including playing Ariel in The Tempest at the Venice Shakespeare Festival and assisting in the direction of Othello.

Content priorities
Featured research / creative projects
1. Becoming Prospero — highest priority for the home page.
- In-progress, single-player, asynchronous VR adaptation of Shakespeare's The Tempest.
- The participant inhabits Prospero in first person, speaks his lines, and uses hand-tracked gestures to perform magic.
- Built in Unity for Meta Quest 3; other characters can be prerecorded rather than live actors.
- Research interest: how embodied participation within an authored, largely predetermined dramatic structure may influence interpretation of character, relationships, power, empathy, and forgiveness.
- Do not imply that audience studies have already proven these effects. Distinguish implemented interactions, design intentions, and future research questions.
- Early demo: https://drive.google.com/file/d/1T-kCoJ_IP1qoZCOZuyzCPqxCACLAFYbY/view
- Prefer a clear project image or short playable demonstration with an explicit caption describing what is shown.
2. All the (Virtual) World's a Stage — theoretical research, in progress.
- A study of how participatory VR theater establishes and supports audiences' involvement as characters.
- Includes production/literature review and development of a design framework relating participation strategies to intended audience experiences.
- Joint work with Arthur Caetano and Tobias Höllerer; do not imply it is a sole-authored or published paper.
- Present as ongoing research unless Andrew supplies a confirmed publication/status change.
3. Planet Story Explorer — completed team capstone with Planet Labs as industry partner.
- AI-assisted platform for discovering and working with satellite imagery and video stories.
- Technical work includes Python/FastAPI backend, Supabase/PostgreSQL, Gemini image metadata, semantic search with Sentence Transformers, OpenCV video processing, and automated newsletter generation.
- The capstone involved a team: distinguish Andrew's contributions from collective results; avoid claiming sole authorship.
- Useful evidence: architecture diagram, concise demonstration, measurable scale/impact only where verified.
Additional technical work
- Too Much Monkey Business: Unity game project; useful as an optional secondary card demonstrating gameplay programming, interaction mechanics, and animation/physics.
- Recipe Generator: small group course project; include only if there is useful and verifiable implementation detail. Label as a team/course project and state Andrew's specific contribution. Do not inflate it into a research contribution or pretend a simple API call is a novel AI system.
- Internship details may appear in an Experience section, but should not be represented as open-source or public projects without permission.
Performance
Potentially feature:
- The Tempest — Ariel; Prague Shakespeare Company / Venice Shakespeare Festival.
- Othello — assistant director; Prague Shakespeare Company.
- UCSB acting and directing work, including one-act productions, as supported by supplied credits and photographs.
Always label role, production, organization, venue, and date carefully. Distinguish the artist's role from the company's other engagements. Never fabricate production photos, credits, or attendance.
Site structure
The existing site is organized around Home / Research / Performance / Contact. Preserve or gently refine this structure unless the user asks otherwise.

Suggested home-page order:
1. Name, concise identity line, tagline, and 2–3 sentence personal introduction.
2. Featured projects, led by Becoming Prospero.
3. Research and technical work, with clear links to details.
4. Performance highlights.
5. Contact, CV, GitHub/LinkedIn, and other links only when supplied or verified.
The site's role is to let a busy professor understand who Andrew is, what he made, what he specifically contributed, and what questions motivate the work in under a minute. Deeper detail should be available from project pages.
Project-page template
Use this structure when it fits the project:
- Title / role / dates / collaborators
- One-sentence overview
- Motivation or research question
- What was built or created (clearly separate completed and planned features)
- Andrew's specific contributions
- Technologies / methods
- Visual evidence (screenshots, performance photographs, demo, diagram)
- Reflection, limitation, or next steps
- Relevant links (demo, repo, paper, press), when verified
Don't force research-paper headings on performance-only projects or force artistic works into a fake software-engineering format.
Non-negotiable content integrity
- Never invent publications, research findings, user-study results, awards, metrics, tool usage, testimonials, collaborations, professor endorsements, or project features.
- Label unfinished material as In Progress, Prototype, Planned, or Early Demo, as appropriate.
- If data or assets are missing, use a clear TODO or ask for them. Do not silently fill the gap with fictional content.
- Do not publish personal contact information, private files, API keys, credentials, or unpublished paper drafts without explicit approval.
- Avoid stock images that imply they depict Andrew's actual performances or prototypes.
- Use accurate alt text and captions; confirm images and links actually correspond to their projects.
Engineering instructions for Codex
1. Inspect the repository first. Identify the framework, file structure, existing components, scripts, styles, and deployment conventions before editing.
2. Work with the existing stack. Do not replace the framework, add heavy dependencies, or initiate a redesign unless explicitly requested.
3. Make focused, maintainable changes. Prefer reusable components and a centralized project-data structure over duplicated card markup.
4. Remove placeholders intentionally. Never leave invented filler such as “Research Project 01” or “Image coming soon” on a page described as ready to publish; if an asset is missing, use an honest and polished fallback.
5. Preserve responsiveness and accessibility. Use semantic HTML, keyboard-accessible navigation, meaningful alt text, readable contrast, and appropriate mobile layouts.
6. Keep performance healthy. Optimize media, avoid unnecessary JavaScript, and prevent layout shifts.
7. Check your work. Run the repository's available lint/build/tests (or report why they could not run), verify links and mobile layout where possible, and summarize changed files and outstanding TODOs.
8. Do not push, deploy, delete major content, or change public sharing settings without the user's request.
Current short-term priority
Produce a credible, functional, polished first version of the portfolio for faculty outreach. Prioritize truthful project content, a working Becoming Prospero demo link, clear technical contributions on Planet Story Explorer, and representative performance credits over unnecessary extra features.

When there is a tradeoff, choose accuracy and substance over polish, and a complete small website over many empty sections.