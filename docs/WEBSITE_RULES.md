# Momentum Wellness Website Rules

## Purpose

These rules protect brand consistency, user trust, accessibility, and the
existing technical structure. Read this file before changing the website.

## Technical Baseline

- Frontend: React 19, TypeScript, Vite, Tailwind CSS
- Routing: Wouter
- UI: Radix-based components and Lucide icons
- Animation: Framer Motion
- Data fetching: TanStack Query
- Backend scaffold: Express
- Current deployment: Replit static deployment from `dist/public`
- Package manager: npm

Use established project patterns before adding libraries or architecture.

## Change Safety

1. Work on a feature branch, never directly on `main`.
2. Inspect the relevant page and shared components before editing.
3. Keep changes narrowly scoped.
4. Do not alter pricing, legal language, business claims, or offer scope without
   explicit approval.
5. Do not add a backend dependency unless the deployment model supports it.
6. Preserve unrelated user changes.
7. Run type checking and a production build before considering work complete.

## Visual Rules

- Preserve the navy, slate, emerald, teal, and restrained blue palette.
- Maintain Montserrat headings and Inter body text.
- Use generous spacing, rounded surfaces, subtle borders, and restrained glow.
- Maintain strong text contrast on light and dark sections.
- Use motion purposefully and respect reduced-motion preferences.
- Treat mobile layouts as first-class experiences.
- Reuse existing components and patterns where practical.

## Content Rules

- Write in clear, practical language.
- Lead with user outcomes, then explain the system.
- Keep the five pillars consistent: training, nutrition, habits,
  accountability, and community.
- Keep individual and corporate paths distinct.
- Do not repeat the same five-pillar section on every page. Use the pillars
  where they advance that page's purpose, and vary the presentation.
- Use one primary call to action per section.
- Do not manufacture urgency, scarcity, social proof, or health outcomes.
- Do not invent testimonials, client logos, metrics, awards, certifications,
  or partnerships.
- Avoid medical diagnosis or treatment language.
- Do not promise healthcare-cost savings.
- Avoid overhyped fitness language.
- Qualify outcome statements when participation and consistency affect results.

## Conversion Rules

The homepage must clearly direct visitors into two paths:

1. Individuals
2. Companies

Page responsibilities:

- `/employee-wellness-programs` is the main corporate sales page.
- `/programs` focuses on individual users.
- `/inside-the-app` is visual and product-focused.
- `/pricing` focuses only on individual offers.
- `/contact` supports both individual and corporate inquiries.
- `/admin/*` tools are development-only and must not be included in production
  builds or public navigation.

Approved individual CTAs include:

- Start Your Program
- Explore Individual Programs
- View Pricing
- Contact Us

The corporate CTA is **Book a Corporate Wellness Consultation**.

Never display corporate wellness pricing publicly.

Do not route users to a form that falsely reports success. A form is not
complete until it validates, transmits, handles errors, protects against spam,
and provides an honest success state.

## Forms and Data

Before activating a form:

- Define the destination and owner of each submission.
- Collect only information needed for the stated purpose.
- Validate through the client and server or a trusted provider.
- Include loading, success, and failure states.
- Add spam and abuse protection.
- Avoid logging messages or personal data unnecessarily.
- Document retention and deletion behavior.
- Update the privacy policy to reflect actual processing.

Never expose secrets in frontend code or committed files.

## Analytics

- Define events before installing tools.
- Track meaningful funnel actions, not every interaction.
- Separate individual and corporate conversions.
- Avoid collecting sensitive wellness or health information.
- Add consent controls where legally required.
- Document ownership, property IDs, and event names without committing secrets.

## SEO

- Give every route a unique title and description.
- Preserve semantic heading order.
- Add meaningful image alternative text.
- Do not keyword-stuff.
- Keep Open Graph and social metadata brand-specific.
- Verify canonical URLs, sitemap, robots rules, and the production domain.

## Accessibility

- Maintain keyboard access and visible focus states.
- Associate labels with form controls.
- Use buttons for actions and links for navigation.
- Preserve sufficient color contrast.
- Provide accessible names for icon-only controls.
- Do not rely on color alone to communicate state.

## Required Verification

For website changes, verify at minimum:

1. `npm run check`
2. `npm run build`
3. Relevant routes on mobile and desktop
4. Navigation and calls to action
5. Form success and failure paths when forms change
6. Browser console and server logs for errors

There is currently no configured lint or test command. Do not claim lint or
automated tests passed until those tools exist.
