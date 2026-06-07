# Codex Workflow for Momentum Wellness

## Purpose

This file defines how future Codex tasks should approach the Momentum Wellness
repository. Read the relevant files in `/docs` before making business, content,
design, conversion, form, analytics, payment, or architecture changes.

## Before Any Change

1. Confirm the active branch is not `main`.
2. Read the request and identify its business impact.
3. Inspect the relevant code, configuration, and existing integrations.
4. Review the applicable documentation:
   - `BRAND_GUIDE.md`
   - `BUSINESS_MODEL.md`
   - `WEBSITE_RULES.md`
   - `CORPORATE_WELLNESS_OFFER.md`
   - `INDIVIDUAL_PROGRAM_OFFER.md`
5. Check repository status and preserve unrelated work.
6. State assumptions when required information is not documented.

## Approval Boundaries

Do not independently change or invent:

- Pricing or billing terms
- Offer inclusions
- Corporate package structure
- Legal or privacy terms
- Medical or health claims
- Testimonials, customer logos, or results
- Credentials, partnerships, awards, or statistics
- Data-collection scope
- Production secrets or provider accounts

Ask for business-owner confirmation when a task depends on these details.

## Business Source of Truth

Momentum Wellness is an app-based fitness, nutrition, habit, accountability,
and community wellness company serving:

1. Individuals seeking app-based training, nutrition structure, habit coaching,
   accountability, progress tracking, and community support.
2. Companies with 50 or more employees seeking employee wellness programs
   focused on workforce health, energy, morale, accountability, and community.

All work should preserve the five pillars: Training, Nutrition, Habits,
Accountability, and Community.

Website changes must preserve these rules:

- The homepage clearly separates individual and company paths.
- The Employee Wellness Programs page is the main corporate sales page.
- The Programs and Pricing pages focus on individuals.
- The Inside the App page remains visual and product-focused.
- The Contact page supports both inquiry types.
- Corporate pricing is never public.
- The corporate CTA is **Book a Corporate Wellness Consultation**.
- Individual CTAs may include **Start Your Program**,
  **Explore Individual Programs**, **View Pricing**, and **Contact Us**.
- The same five-pillar section should not be repeated across every page.
- Never introduce guaranteed weight-loss claims, medical claims,
  healthcare-cost savings promises, fake testimonials, fake client results, or
  overhyped fitness language.

## Technical Context

- React and TypeScript frontend
- Vite build system
- Wouter client routing
- Tailwind CSS styling
- Radix-derived UI components
- Framer Motion animation
- Express backend scaffold
- Drizzle/PostgreSQL scaffold
- Replit static deployment
- npm package management

Current limitations:

- Contact submissions use the Formspree endpoint configured in
  `.env.production`, with local overrides kept in the ignored `.env` file.
- Internal admin tools are available only during local development.
- The Express server has no active API routes.
- The database schema is scaffolded but not used by the website.
- No analytics is installed.
- No payment or membership workflow is installed.
- No test or lint command is configured.

## Implementation Sequence

For substantial work:

1. Document the intended business workflow and acceptance criteria.
2. Confirm deployment constraints and provider choices.
3. Define data shape, validation, privacy, and error behavior.
4. Implement the smallest complete end-to-end workflow.
5. Add focused tests appropriate to the risk.
6. Run type checking and the production build.
7. Verify affected routes in a browser on mobile and desktop.
8. Review copy, accessibility, privacy, and analytics behavior.
9. Summarize changes, verification, and remaining risks.

## Form Workflow

A form task is not complete when the UI shows a success message. A complete
form requires:

- Clear field purpose
- Client-side validation
- Server-side or trusted-provider validation
- A submission destination
- Loading state
- Honest success state
- Actionable error state
- Spam protection
- Privacy disclosure where needed
- Safe logging behavior
- Delivery verification

## Analytics Workflow

Before adding analytics:

1. Define the business questions.
2. Define event names and properties.
3. Separate individual and corporate funnels.
4. Avoid health or sensitive personal data.
5. Confirm consent requirements.
6. Add and verify analytics outside production where possible.
7. Document property IDs and ownership without committing secrets.

## Verification Commands

Current available checks:

```sh
npm run check
npm run build
```

There is no configured automated test or lint command. Add tooling when
requested or when necessary for the safe completion of a larger feature.

## Definition of Done

A task is complete when:

- The requested behavior works end to end.
- Existing routes and layouts remain intact.
- Type checking passes.
- The production build passes.
- Relevant browser behavior is verified.
- Empty, loading, success, and failure states are handled where applicable.
- Accessibility and mobile behavior are checked.
- No secrets or unsupported claims were introduced.
- Documentation is updated when business rules or system behavior change.

## Task Summary Format

Final summaries should state:

- What changed
- Where it changed
- What was verified
- Owner decisions still needed
- Known limitations or risks

Do not describe unverified behavior as complete.
