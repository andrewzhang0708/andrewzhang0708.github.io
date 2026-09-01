# Andrew Zhang Portfolio Website Specification

## 1. Purpose

Build a personal portfolio website for Andrew Zhang that supports graduate applications in interdisciplinary programs spanning HCI, computational media, media arts and technology, entertainment technology, and related MS/PhD programs.

The site should present Andrew as a coherent interdisciplinary researcher and creator, not as three unrelated majors or as a conventional software engineer with theatre as a hobby.

The central identity is:

> Theatre provides the questions and creative practice. Computer science provides the systems and implementation methods. Mathematics provides analytical rigor.

The site must remain broad enough to support future work beyond VR and Shakespeare.

## 2. Primary audiences

Design for these audiences, in this order:

1. Faculty reviewing PhD and research-oriented master's applications in HCI, XR, computational media, and media arts.
2. Faculty and admissions committees in practice-based media, entertainment technology, and interdisciplinary art-and-technology programs.
3. Potential research collaborators in digital humanities, theatre, performance, and emerging media.
4. Creative-technology employers and project collaborators.
5. Theatre professionals who want to inspect directing, acting, and production credits.

The primary reviewer may spend only two or three minutes on the site. The homepage and every project page must therefore communicate the research or creative question, Andrew's role, and the outcome without requiring the reviewer to watch a long video.

## 3. Core messaging

### Name and professional identity

**Andrew Zhang**

Suggested professional descriptor:

> Interdisciplinary Researcher, Theatre Director, and Creative Technologist

Do not use a descriptor that limits the site to VR or to *The Tempest*.

### Primary tagline

> **Thinking in systems. Creating new forms of experience.**

### Supporting line

> Working across computation, mathematics, theatre, and emerging media, I combine rigorous inquiry with creative practice.

### Optional alternate taglines

Use these only if the primary tagline is later replaced:

- Where rigorous inquiry meets creative practice.
- Researching with rigor. Creating with imagination.
- Systems, stories, and the spaces between them.
- Between logic and imagination, I create experiences.
- Building new ways to think, create, and experience.

## 4. Editorial principles

- Show interdisciplinarity through the selection and presentation of work rather than repeatedly using the word "interdisciplinary."
- Treat theatre as a substantive creative and research practice, not an extracurricular activity.
- Treat technical projects as evidence of implementation and collaboration, not as isolated lists of tools.
- Explain research in accessible language before introducing HCI or digital-humanities terminology.
- State individual contributions precisely for every collaborative project.
- Distinguish completed work, work in progress, course projects, and research clearly.
- Do not exaggerate publication, submission, evaluation, or deployment status.
- Use "manuscript in preparation" only if a real manuscript exists. Do not use "under review" unless it has actually been submitted.
- Do not publish transcripts, private contact information, confidential client material, or non-public PlanetLabs information.

## 5. Recommended information architecture

Use a concise multi-page structure:

```text
/
  Home
/work
  Selected Work index
/work/tempest-vr
/work/[one-act-production-1]
/work/[one-act-production-2]
/work/planetlabs-capstone
/work/xr-course-project
/theatre
  Theatre credits and performance practice
/about
/cv
```

The exact URLs can change, but the site should preserve this separation:

- The homepage curates a small number of flagship works.
- Project pages provide detailed case studies.
- The theatre page uses professional credit-list conventions.
- The CV page provides the academic/creative-technology CV and theatre résumé separately.

If an initial MVP must be smaller, build the homepage, `Tempest VR`, one directing project, `PlanetLabs Capstone`, `About`, and `CV` first. Hide unfinished navigation items rather than exposing broken pages.

## 6. Homepage specification

### 6.1 First viewport

The first viewport should contain:

- Andrew Zhang's name.
- The primary tagline.
- The supporting line.
- Two restrained calls to action:
  - `View selected work`
  - `Academic CV`
- One strong, authentic image or a composed strip of project imagery if suitable material is available.

Do not use:

- A generic code animation.
- A 3D globe.
- Neon "metaverse" imagery.
- Skill bars or percentage ratings.
- A long autobiographical paragraph.
- An autoplaying video with sound.

### 6.2 Selected work

Show four flagship cards in the initial version:

1. **Tempest VR** — Immersive theatre and HCI research.
2. **One Act Directing** — The strongest completed directing production.
3. **PlanetLabs Capstone** — Industry-sponsored technical collaboration.
4. **XR Course Project** or a second directing production, depending on which has stronger documentation.

Each card must include:

- One image or silent video thumbnail.
- Project title.
- Short category label, such as `Research`, `Directing`, or `Technical Project`.
- A one-sentence question or contribution, not merely a list of technologies.
- Year and status if relevant.

### 6.3 Short biography

Keep the homepage biography to approximately 80–120 words. It should explain the connection between theatre, computation, mathematics, and emerging media. It should not retell the full chronological history of changing majors.

Suggested conceptual structure:

1. Andrew is trained across theatre, computer science, and mathematics at UC Santa Barbara.
2. His creative practice includes directing, acting, and Shakespearean performance.
3. His research and technical work explores how computational systems can create or study new forms of embodied, interactive, and narrative experience.
4. He is currently developing *Tempest VR*.

Write the final biography only after Andrew supplies or approves the factual details.

### 6.4 Footer

Include only useful links:

- Email
- CV
- GitHub
- LinkedIn
- Theatre credits

Do not include social platforms that contain no relevant professional material.

## 7. Project page template

Every project page should use the following sequence.

### 7.1 Header

- Project title.
- One-sentence thesis, research question, or creative premise.
- Hero image or short video.

### 7.2 At a glance

Use a compact metadata block:

```text
Role:
Date:
Context / Institution:
Collaborators:
Status:
Tools / Methods:
```

Do not list tools unless they help explain the work.

### 7.3 Question or challenge

Explain the central research, design, theatrical, or technical problem in plain language.

### 7.4 Process

Show selected evidence of thinking and iteration, such as:

- Literature review insights.
- Storyboards and interaction flows.
- Annotated scripts.
- Blocking diagrams.
- Prototype screenshots.
- Rehearsal experiments.
- Study or evaluation design.
- Technical architecture where relevant.

### 7.5 Individual contribution

Include an explicit section titled `My contribution` for all collaborative projects. Avoid vague phrases such as "worked on" or "helped with."

### 7.6 Outcome and status

State what was produced and what remains unfinished. Appropriate statuses include:

- Completed production.
- Early prototype.
- Research in progress.
- Industry-sponsored capstone.
- Course research project.

### 7.7 Reflection or next step

Briefly explain what Andrew learned, what changed through iteration, or what the next research step will test.

## 8. Flagship project: Tempest VR

### Current factual description

*Tempest VR* is an in-progress immersive adaptation and research project centered on Act 1, Scene 2 of Shakespeare's *The Tempest*, particularly the first introduction of Ariel.

The participant inhabits Prospero's perspective. The project explores how a Shakespeare scene can become an experience from a different perspective while retaining meaningful engagement with Shakespeare's original language rather than reducing the play to a plot summary.

Possible interaction approaches include karaoke-style line delivery, prerecorded speech, embodied participation, and interaction with Ariel. These are design possibilities, not all confirmed final features.

### Current research direction

Use the following as a provisional question, not a final published claim:

> How might embodying Prospero in VR reshape a participant's interpretation of his relationship with Ariel while preserving engagement with Shakespeare's language?

Related research dimensions include:

- Embodiment and first-person perspective.
- Interactive agency and dramaturgical coherence.
- The relationship between Prospero and Ariel.
- Attention, blocking, gaze, and spatial staging in immersive theatre.
- Shakespearean language in participatory or interactive media.
- Adaptation across theatre, text, and computational media.

### Current status

- Original project idea developed during the 2025–26 academic year.
- Literature review conducted in spring 2026.
- Early demo developed through a graduate XR course in collaboration with another undergraduate student.
- Further research and development planned for the 2026–27 academic year.
- Mentorship involves Professor Tobias Höllerer's research environment and a PhD student collaborator/mentor. Confirm exact attribution before publication.

### Required media

- A 30–90 second demo video.
- Three to six prototype screenshots.
- A simple interaction flow.
- One or two images showing development or testing.
- Optional excerpts from the literature map or design rationale.

### Important framing

Do not present the project merely as "Shakespeare in VR." Emphasize the research question and the specific transformation of perspective, relationship, language, and agency.

Do not claim that a user study or formal evaluation has occurred until it has.

## 9. Directing projects

Create one case-study page for each sufficiently documented One Act production.

### Required factual fields

```text
Production title: TODO
Playwright: TODO
Role: Director
Company / Institution: UC Santa Barbara, exact unit TODO
Venue: TODO
Performance dates: TODO
Cast and key collaborators: TODO
```

### Presentation strategy

Do not publish a gallery of unexplained production photos. Make invisible directing work legible through:

- A concise directorial concept.
- The interpretive or staging problem.
- Blocking and spatial decisions.
- Work with actors.
- Rehearsal experiments and changes.
- Collaboration with lighting, sound, costume, scenic, and stage-management teams.
- A reflection on the final production.

Use four to six selected photographs and a 45–90 second highlight video. The page must still make sense if the reviewer does not play the video.

Add captions that identify the decision being shown, for example:

> Physical distance between the actors externalized the breakdown of trust in this scene.

Do not invent a directorial concept or production interpretation. Wait for Andrew's source material.

## 10. PlanetLabs capstone

### Current factual description

- Computer Science capstone project at UC Santa Barbara.
- Industry-sponsored collaboration with PlanetLabs.
- Team-based AI project involving satellite data.
- Functioned partly like an internship and partly like a small startup/product team.

### Required additions

```text
Official project title: TODO
Dates: TODO
Team size: TODO
Faculty supervisor: TODO
PlanetLabs contact or sponsor attribution: TODO, only if public
Problem statement: TODO
Andrew's exact contribution: TODO
Technologies: TODO
Outcome / demo / evaluation: TODO
Public repository or link: TODO, if permitted
```

### Confidentiality

Do not expose proprietary satellite data, internal communications, private repositories, client materials, or unpublished results. If public disclosure is uncertain, use a high-level description and request approval before publishing technical details.

## 11. XR graduate-course project

Include this as a separate work only if it is meaningfully distinct from *Tempest VR*. If the early demo is simply an early phase of *Tempest VR*, merge it into that project's case study rather than counting it twice.

Required fields:

```text
Course title and level: TODO
Instructor: TODO
Collaborator: TODO
Project title: TODO
Research or design question: TODO
Andrew's contribution: TODO
Demo and paper status: TODO
```

## 12. Prague Shakespeare experience

### Current factual description

- Prague Shakespeare Company Summer Shakespeare Intensive.
- Summer 2026.
- Approximately six weeks in Prague with an Italy tour.
- Work included acting and assistant-directing/directing-related experience. Confirm exact title and responsibilities.

### Academic/creative-technology presentation

On the main CV or an optional project page, present the program as one experience with two or three concise bullets describing:

- Roles performed.
- Productions and tour locations.
- Assistant-directing or directing responsibilities.
- Shakespearean text, voice, movement, rehearsal, and ensemble training.

### Theatre-credits presentation

On the theatre page, do not treat the entire summer as one vague bullet. List each verified production in the appropriate credits table.

Do not publish role names, directors, venues, or touring locations until Andrew confirms them.

## 13. Theatre page

Create a professional credits page titled `Theatre` or `Theatre Credits`.

Because the current directing credits are still developing, combine directing, assistant directing, acting, and training on one page rather than presenting a sparse director-only résumé.

### Directing

```text
Production | Playwright | Position | Company / Venue | Year
```

### Assistant directing

```text
Production | Director | Position | Company / Venue | Year
```

### Acting

```text
Production | Role | Director | Company / Venue | Year
```

### Training

```text
Discipline | Instructor | Institution / Program | Year
```

### Optional performance reel

Combine selected acting clips into one 60–90 second reel. Do not create a separate project page for every acting role unless the performance involved substantial devising, original authorship, or a direct connection to the research agenda.

Frame performance experience as knowledge of embodiment, voice, spatial relationships, rehearsal, and audience attention, but do not force an HCI interpretation onto every credit.

## 14. CV strategy

The website should provide two distinct documents or views.

### 14.1 Academic / Creative Technology CV

This is the primary document for HCI, computational media, media arts, and graduate applications. Target length: approximately two pages.

Suggested order:

1. Education.
2. Research Experience.
3. Selected Technical and Creative Projects.
4. Selected Theatre Experience.
5. Publications and Presentations, when applicable.
6. Awards.
7. Technical and Creative Skills.

Use one to four accomplishment-oriented bullet points for each major research or project entry.

### 14.2 Theatre Résumé

Target length: one page initially, or two pages when credits justify it.

Use theatre-industry credit tables rather than explanatory bullet points. Divide it into Directing, Assistant Directing, Acting, and Training.

### Website behavior

Provide separate labels:

- `Download Academic CV`
- `View Theatre Credits`

Optionally provide `Download Theatre Résumé` once that PDF exists.

If only one CV is available, expose only the academic CV and the HTML theatre-credits page. Never leave a dead download button.

## 15. About page

The About page should explain the intellectual connection between Andrew's fields without apologizing for a nonlinear path.

Recommended themes:

- Training in mathematics established a foundation in formal and analytical thinking.
- Computer science added the ability to build computational systems.
- Theatre developed an embodied, collaborative, interpretive, and audience-centered creative practice.
- Directing created an interest in attention, perspective, space, performance, and agency.
- Current work joins these practices through emerging media and human-computer interaction.

Avoid:

- A semester-by-semester autobiography.
- Statements such as "I did not do much in my first two years."
- Overexplaining the fifth undergraduate year.
- Listing every course.

Include a professional photograph only if a suitable authentic image is available.

## 16. Visual direction

### Design thesis

Use a visual language combining a contemporary editorial portfolio with a restrained theatre program or annotated script. The result should feel literate, precise, and creative rather than corporate, cyberpunk, or conventionally theatrical.

### Suggested palette

Use one light and one dark neutral plus a restrained accent. Example starting values:

```css
--background: #f3f0e9;
--surface: #fbfaf6;
--text: #181716;
--muted: #68645e;
--accent: #7c2431;
--line: #cbc5ba;
```

The exact colors may be adjusted after real project imagery is available. Ensure WCAG-compatible text contrast.

### Typography

- Use a literary serif for major headings and project titles.
- Use a highly readable sans-serif for body copy, metadata, navigation, and captions.
- Use monospaced type sparingly for technical metadata, not as the site's dominant identity.
- Avoid decorative pseudo-Elizabethan fonts.

### Recognizable motifs

Possible restrained motifs include:

- `ACT / SCENE` numbering for selected sections.
- Marginal notes or caption treatments inspired by annotated scripts.
- Editorial rules, folio-like numbering, or stage-direction labels.
- Full-bleed production photography balanced with structured research diagrams.

Do not allow the motif to reduce usability or make every project appear Shakespeare-related.

### Motion

- Use minimal motion: subtle fades, hover transitions, and restrained image reveals.
- Respect `prefers-reduced-motion`.
- Do not use scroll hijacking, long intro animations, parallax that impairs reading, or autoplaying sound.

## 17. Media requirements

### Images

- Prefer authentic project images.
- Export display images as WebP or optimized JPEG.
- Use approximately 1600–2400 px maximum width for large images.
- Provide meaningful alt text.
- Include captions that explain decisions, not merely names.

### Video

- Use a 30–90 second edited overview on the page.
- Make longer full-performance or full-demo videos optional secondary links.
- Add English captions.
- Use a clear poster frame.
- Do not autoplay with sound.
- The page must communicate the work without requiring playback.

### PDFs and downloads

- Academic CV PDF.
- Optional Theatre Résumé PDF.
- Optional research paper or project brief when ready.
- Use stable, descriptive filenames such as `Andrew_Zhang_Academic_CV.pdf`.

## 18. Recommended technical implementation

### Default stack

Unless an existing repository already establishes another suitable stack, use:

- Astro.
- TypeScript.
- Plain CSS, CSS modules, or a small design-token system.
- Markdown or MDX content files for project case studies.
- Static generation.
- Minimal client-side JavaScript.

Astro is recommended because the site is content-heavy, should load quickly, and does not need application-like state.

Do not add a database, authentication, CMS, search, analytics, or complex animation library for the MVP.

### Suggested content structure

```text
src/
  components/
    Header.astro
    Footer.astro
    ProjectCard.astro
    ProjectMeta.astro
    MediaBlock.astro
    CreditsTable.astro
  content/
    projects/
      tempest-vr.md
      planetlabs-capstone.md
      one-act-1.md
      one-act-2.md
      xr-course-project.md
  layouts/
    BaseLayout.astro
    ProjectLayout.astro
  pages/
    index.astro
    work/index.astro
    work/[slug].astro
    theatre.astro
    about.astro
    cv.astro
  styles/
    global.css
public/
  images/
  video-posters/
  documents/
```

Adapt this structure if the local repository already uses another framework. Do not replace a working project architecture solely to follow this outline.

### Content frontmatter example

```yaml
title: Tempest VR
slug: tempest-vr
category: Research
year: 2026
status: Research in progress
role: Undergraduate researcher and developer
summary: A first-person immersive adaptation exploring perspective, agency, and Shakespearean language.
featured: true
cover: /images/tempest-vr/cover.webp
```

### Responsive behavior

- Design mobile-first.
- Ensure project metadata remains legible on small screens.
- Collapse credit tables into labeled stacked rows on narrow screens.
- Do not rely on hover to expose essential information.
- Keep line length appropriate for analytical writing and case studies.

### Accessibility

- Use semantic heading order.
- Ensure all interactive elements work by keyboard.
- Provide visible focus states.
- Caption videos.
- Provide alt text for meaningful images and empty alt text for purely decorative images.
- Maintain sufficient color contrast.
- Respect reduced-motion settings.

### Performance

- Optimize all media.
- Lazy-load below-the-fold images and video embeds.
- Avoid loading full YouTube or Vimeo embeds until requested if a lightweight poster-link approach is practical.
- Target a fast first contentful paint on typical mobile connections.

### Metadata

Use:

```text
Site title: Andrew Zhang — Research and Creative Practice
Description: Interdisciplinary work across computation, mathematics, theatre, and emerging media.
```

Add project-specific page titles and descriptions. Add social-preview imagery only after authentic site imagery is selected.

## 19. Content collection checklist

Before replacing TODO content, collect:

### Identity

- Approved short biography.
- Public contact email.
- GitHub URL.
- LinkedIn URL.
- Optional professional photograph.

### Tempest VR

- Final project summary.
- Current research question.
- Confirmed collaborators and attribution.
- Screenshots.
- Demo video.
- Interaction diagram.
- Current status and next step.

### Each directing production

- Title and playwright.
- Dates, venue, and institution/company.
- Cast and key collaborators.
- Directorial concept.
- Four to six selected photographs.
- Highlight video.
- Blocking, annotated script, or rehearsal materials.
- Short reflection.

### PlanetLabs

- Public project title and description.
- Exact individual contribution.
- Approved screenshots or diagrams.
- Technical methods.
- Outcome and public links.
- Confirmation of what may be disclosed.

### Prague Shakespeare

- Exact program dates.
- Productions.
- Roles.
- Directors.
- Venues and tour locations.
- Confirmed assistant-directing responsibilities.
- Training areas and instructors.
- Photographs and performance footage that may be published.

### Documents

- Academic / Creative Technology CV.
- Theatre Résumé, when ready.
- Optional project paper or brief.

## 20. MVP implementation order

### Phase 1: Application-ready foundation

1. Establish typography, palette, layout, navigation, and metadata.
2. Build the homepage.
3. Build the reusable project template.
4. Publish complete pages for Tempest VR, one directing project, and PlanetLabs.
5. Build About, Theatre Credits, and CV pages.
6. Verify mobile layout, keyboard access, links, image sizes, and video captions.

### Phase 2: Documentation expansion

1. Add the second directing production.
2. Add the distinct XR course project if appropriate.
3. Add Prague and acting/performance documentation.
4. Add a research paper, study results, or updated Tempest VR demo when available.
5. Add custom domain and social preview only after the content and visual identity stabilize.

## 21. Acceptance criteria

The MVP is ready when:

- A faculty reviewer can understand Andrew's identity and research direction from the first viewport.
- The homepage presents no more than four flagship works initially.
- Each collaborative project states Andrew's contribution explicitly.
- The Tempest VR page distinguishes research questions from unimplemented ideas and untested claims.
- At least one directing project makes directing decisions legible without requiring the reviewer to watch the full performance.
- Academic CV and theatre credits are presented as separate artifacts.
- No confidential PlanetLabs or private collaborator material appears.
- No page contains fabricated titles, roles, collaborators, outcomes, or metrics.
- All TODO placeholders are either replaced or hidden before public deployment.
- The site works on mobile and desktop, supports keyboard navigation, includes captions and alt text, and loads quickly.
- There are no broken navigation links or dead download buttons.

## 22. Instructions for the local coding agent

1. Inspect the existing repository before choosing or changing the framework.
2. Preserve any working architecture and deployment configuration.
3. Use the content and structure in this document as the source of truth.
4. Do not invent missing production names, roles, collaborators, dates, research results, or client details.
5. Mark missing source material as `TODO` during local development and hide it from production output.
6. Build the smallest coherent, polished site before adding optional effects or features.
7. Prefer authentic photographs, diagrams, scripts, and prototype media over generic stock images or AI-generated theatre/VR imagery.
8. Do not make the site look exclusively Shakespearean, exclusively theatrical, or exclusively technical.
9. Keep Andrew's broader identity—analytical rigor alongside artistic imagination—visible across the entire site.
10. Before deployment, run the production build and verify all routes, metadata, media paths, downloadable files, responsive layouts, and accessibility basics.

