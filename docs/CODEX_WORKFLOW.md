# Codex Workflow for Momentum Wellness

## Purpose

This file defines how future Codex tasks should approach the Momentum Wellness
repository. Read the relevant files in `/docs` before making business, content,
design, conversion, form, analytics, payment, or architecture changes.

## Before Any Change

1. Confirm the active branch is not `main`.
2. Read `AGENTS.md`.
3. Read the request and identify its business impact.
4. Inspect the relevant code, configuration, and existing integrations.
5. Review the applicable documentation:
   - `BRAND_GUIDE.md`
   - `BUSINESS_MODEL.md`
   - `WEBSITE_RULES.md`
   - `CORPORATE_WELLNESS_OFFER.md`
   - `INDIVIDUAL_PROGRAM_OFFER.md`
6. Explain the implementation plan.
7. Check repository status and preserve unrelated work.
8. State assumptions when required information is not documented.

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
   focused on workforce health, energy, morale, accountability, and culture.

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
- Express server for production website and internal authentication
- Replit Autoscale deployment
- npm package management

Current limitations:

- Contact submissions use the Formspree endpoint configured in
  `.env.production`, with local overrides kept in the ignored `.env` file.
- Internal admin tools are available at `/admin` and its child routes, are
  excluded from public navigation and indexing, and use server-verified shared
  password access.
- Admin credentials must be configured with `ADMIN_TOOL_PASSWORD` and
  `SESSION_SECRET` in the deployment environment. Neither value may use a
  `VITE_*` prefix or be committed.
- A shared onboarding tracker exists at `/admin/onboarding-tracker`. It stores
  minimal operational records in PostgreSQL through authenticated admin API
  routes and requires `DATABASE_URL` in the deployment environment.
- The tracker supports shared create, update, refresh, import, and delete
  workflows. It does not send emails, process payments, or perform Trainerize
  actions.
- Existing browser-only tracker records can be explicitly imported once.
- The Express server provides admin authentication and shared onboarding
  record API routes.
- A lightweight analytics event utility exists, but no third-party analytics
  provider is installed.
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

Do not redesign the entire site or business system in one task unless
explicitly asked.

## Client Data and Credential Rules

Never hard-code or commit:

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

Use environment variables and secure backend patterns. Collect and retain only
the minimum information required for an approved workflow. Never place
sensitive health information in public code, analytics events, logs, or
client-side configuration.

## Automation Workflow

Use a human-review-first approach unless the workflow is fully tested and
approved.

For new client onboarding, prefer this staged model:

1. Capture the purchase or lead event.
2. Store a minimal lead or client record in an approved system.
3. Send an internal notification.
4. Create or prepare the Trainerize client setup.
5. Send the approved welcome email.
6. Assign the onboarding checklist.
7. Require human approval before irreversible or sensitive actions until the
   workflow has been tested.

Document failure handling, duplicate prevention, retry behavior, data
ownership, and the manual fallback before enabling unattended automation.

## Trainerize Integration Rules

Do not assume direct Trainerize API access exists unless the current account
plan, API availability, authentication method, and permitted actions are
confirmed.

Evaluate these paths in order of fit and availability:

- Zapier integration
- Trainerize API, if available on the current plan
- Webhooks, if available
- Google Sheets, Airtable, Supabase, or a database staging table
- Internal email notification
- Manual admin task

If automation is incomplete or blocked by plan limitations, implement and
document a safe manual workflow rather than pretending the automation is
complete.

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
- Corporate pricing has not been exposed publicly.
- SEO metadata remains unique where routes were changed.
- No medical, guaranteed-result, fake-testimonial, fear-based, or shame-based
  claims were introduced.
- No credentials or sensitive client information were added.

## Git Workflow

- Do not commit directly to `main` unless explicitly instructed.
- Use feature branches for major work.
- Keep commits focused and clearly named.
- Summarize changes before committing.
- Ask for approval before merging.

## Task Summary Format

Final summaries should state:

- What changed
- Where it changed
- What was verified
- Owner decisions still needed
- Known limitations or risks

Do not describe unverified behavior as complete.
