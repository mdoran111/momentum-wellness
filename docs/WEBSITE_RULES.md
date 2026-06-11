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
2. Read `AGENTS.md` and the relevant files in `/docs`.
3. Inspect the relevant page and shared components before editing.
4. Explain the plan and keep changes narrowly scoped.
5. Do not alter pricing, legal language, business claims, or offer scope without
   explicit approval.
6. Do not add a backend dependency unless the deployment model supports it.
7. Preserve unrelated user changes and existing functionality.
8. Do not redesign the entire site or business system in one task unless
   explicitly asked.
9. Run every available build, typecheck, test, or lint command before
   considering work complete.

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
- Avoid fear-based or shame-based messaging.
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
- `/admin/*` tools are private business tools and must not appear in public
  navigation or the public sitemap.
- Production admin access must use server-side password verification through
  `ADMIN_TOOL_PASSWORD` and a signed HTTP-only session cookie.
- Admin pages must use `noindex, nofollow, noarchive` metadata and the server
  must send an `X-Robots-Tag` noindex header.
- Never expose an admin password through a `VITE_*` environment variable.
- Shared admin records must use authenticated server APIs and a private
  database connection configured through `DATABASE_URL`.
- Never include private record contents in analytics events or routine API
  response logs.

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

Never hard-code:

- API keys
- Trainerize credentials
- Email credentials
- Payment credentials
- Client names
- Client health information
- Client progress photos
- Food logs
- Medical details
- Private purchase data

Use environment variables and secure backend patterns for credentials and
integrations. Do not store sensitive health information in public code.

## Automation and Trainerize

- Use a human-review-first approach unless an automation is fully tested and
  approved.
- Do not assume direct Trainerize API access exists unless the current plan and
  credentials have been confirmed.
- Supported implementation paths may include Zapier, a confirmed Trainerize
  API, confirmed webhooks, Google Sheets, Airtable, Supabase, or a database
  staging table.
- Provide internal email notifications or a manual admin-task fallback when
  automation is incomplete or blocked by plan limitations.
- Require human approval before irreversible or sensitive actions until the
  workflow has been tested.

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
7. Corporate pricing is not public
8. SEO metadata remains unique
9. No sensitive information or unsupported health claims were added

There is currently no configured lint or test command. Do not claim lint or
automated tests passed until those tools exist.
