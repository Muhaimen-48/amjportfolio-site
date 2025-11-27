# Design Guidelines: Academic Research Portfolio for Abdul Muhaimen Jamil Washi

## Design Approach

**Selected Approach:** Design System with Academic Research Focus
**Primary Inspiration:** Notion's clean information architecture + Linear's typography hierarchy + Academic journal aesthetics
**Rationale:** This portfolio serves dual purposes - showcasing academic credentials and demonstrating technical proficiency in geospatial analysis. The design should feel authoritative yet modern, with clear information hierarchy that helps visitors quickly understand research impact and expertise.

## Core Design Principles

1. **Research-First Hierarchy:** Content structured to highlight scholarly achievements and technical capabilities
2. **Visual Credibility:** Professional, polished aesthetic that conveys scientific rigor
3. **Spatial Thinking:** Subtle nods to GIS/mapping work through layout and grid systems
4. **Scannable Depth:** Quick overview with opportunities to dive deeper into research

## Typography System

**Font Families:**
- Primary: Inter (400, 500, 600, 700) - for body text, UI elements
- Headings: DM Sans (500, 600, 700) - for section titles, emphasis
- Accent: JetBrains Mono (400, 500) - for technical details, code references

**Type Scale:**
- Hero Name: text-5xl to text-6xl (60-72px), font-bold
- Section Headings: text-3xl to text-4xl (36-48px), font-semibold
- Subsection Titles: text-xl to text-2xl (24-30px), font-medium
- Body Text: text-base to text-lg (16-18px), font-normal
- Captions/Meta: text-sm (14px), font-normal

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Content margins: mb-4, mb-6, mb-8

**Container Strategy:**
- Maximum width: max-w-6xl for main content
- Research cards: max-w-7xl for grid layouts
- Text blocks: max-w-3xl for optimal readability
- Full bleed: w-full for hero and major sections

**Grid Systems:**
- Publications/Projects: grid-cols-1 md:grid-cols-2 with gap-8
- Skills categories: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Timeline events: Single column with left-aligned markers

## Component Library

### Navigation
Sticky header with translucent backdrop blur, containing logo/name, smooth-scroll navigation links (Research, Publications, Skills, About, Contact). Mobile: hamburger menu with slide-in drawer.

### Hero Section
**Layout:** Asymmetric two-column design (60/40 split on desktop)
- Left: Name (text-6xl), professional title "Fisheries Science Researcher & GIS Specialist", brief 2-line summary, primary CTA button "View Research", secondary CTA "Download CV"
- Right: Professional headshot with subtle rounded border, overlaid with location badge "Chittagong, Bangladesh"
- Background: Subtle gradient with coastal blue tones, no distracting patterns

### Research Experience Cards
Card-based layout with:
- Project title (text-xl font-semibold)
- Timeline badge (text-sm with rounded background)
- Supervisor information (text-sm with professor icon)
- Project summary (text-base, max 3-4 lines)
- Techniques/tools used (pill-style tags)
- Expand button for full details
- Hover: subtle shadow lift (shadow-lg)

### Publications Showcase
Featured publication card with:
- Article title as heading
- Journal name and publication date
- Abstract excerpt
- External link button to Springer article
- Citation count indicator (if applicable)
- Future publications: Placeholder cards indicating "In Progress" research

### Skills Section
**Four category columns:**
1. Geospatial Tools (QGIS, ArcGIS Pro, KoboToolbox)
2. Technical & Programming (Python, R/RStudio with libraries)
3. Design & Visualization (Adobe Suite)
4. Research & Soft Skills

Each skill as pill with icon + label, organized by proficiency/importance

### Academic Timeline
Vertical timeline with:
- Degree markers (circle nodes)
- Institution names
- Dates and CGPA
- Core courses as expandable accordion
- Connecting line between degrees

### Leadership Section
Grid of volunteer/leadership roles:
- Organization logo/icon
- Position title
- Organization name
- Date range
- Location

### Contact Footer
Two-column layout:
- Left: Contact form (Name, Email, Message) with submit button
- Right: Direct contact info (Email with copy button, LinkedIn link with icon, Location with map pin)
- Social links: LinkedIn, research profiles (ResearchGate, ORCID placeholders)

## Images

**Hero Image:** Professional headshot or environmental portrait. Should convey academic professionalism with natural lighting. Recommend outdoor setting near water or research field location. Size: 400x500px approximately, rounded corners.

**Section Backgrounds:** Subtle coastal/marine themed patterns or textures for hero backdrop only. No other section backgrounds needed.

**Research Visuals:** If available, include GIS map outputs, field research photos, or data visualization examples as thumbnails in research cards. These reinforce technical capabilities visually.

## Interactive Elements

**Cards:** Hover effect with shadow-lg transition, cursor-pointer
**Buttons:** Primary (solid background), Secondary (outline style), both with smooth hover states
**Links:** Underline on hover for inline text links, color shift for navigation items
**Accordions:** Smooth expand/collapse for course lists and research details
**Modals:** For expanded research project details

## Animations

**Minimal Motion Philosophy:**
- Fade-in on scroll for section reveals (duration-500)
- Smooth transitions for hover states (transition-all duration-300)
- No parallax, no complex scroll-driven animations
- Focus on content, not effects

## Accessibility Standards

- WCAG 2.1 AA contrast ratios minimum
- Semantic HTML throughout (article, section, nav, main)
- ARIA labels for interactive elements
- Keyboard navigation fully supported
- Focus indicators clearly visible
- Alt text for all images

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts)