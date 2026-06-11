# Momentum Wellness Codex Instructions

## Project Context

- Momentum Wellness is an app-based fitness, nutrition, habit,
  accountability, and community wellness company.
- It serves individuals seeking structure and support, and companies with 50+
  employees seeking workforce wellness programs.
- The five core pillars are Training, Nutrition, Habits, Accountability, and
  Community.
- Always read this file and the relevant files in `/docs` before making major
  changes.
- Treat `/docs` as the source of truth for the brand, business model, offers,
  website rules, and Codex workflow.

## Change Rules

- Inspect the relevant files and explain the plan before editing.
- Preserve existing routes, forms, and deployment behavior unless the task
  explicitly requires a change.
- Keep individual offers and corporate offers clearly separated.
- Never display corporate wellness pricing publicly.
- Use **Book a Corporate Wellness Consultation** as the corporate CTA.
- Keep the site premium, professional, modern, clean, trustworthy, practical,
  health-transformation focused, and not repetitive or generic.
- Avoid repeating the same content structure or five-pillar section across
  every page.
- Do not redesign the entire site or business system in one task unless
  explicitly asked.

## Claims and Trust

Do not introduce:

- Medical claims
- Guaranteed weight-loss claims
- Healthcare-cost savings promises
- Fake testimonials
- Fake client results
- Overhyped fitness language
- Fear-based or shame-based messaging

Do not invent pricing, proof, partnerships, credentials, or business outcomes.
Do not publicly display private client information.

## Data and Credentials

Never hard-code or commit:

- API keys or service credentials
- Trainerize credentials
- Email or payment credentials
- Client names or private purchase data
- Client health information, medical details, food logs, or progress photos

Use environment variables and secure backend patterns for credentials and
integrations. Do not store sensitive health information in public code.

## Automation Rules

- Use a human-review-first approach until an automation is fully tested and
  approved.
- Do not assume direct Trainerize API access exists.
- Support Zapier, confirmed APIs, confirmed webhooks, staging tables, internal
  notifications, and safe manual-task fallbacks.
- Require human approval before irreversible or sensitive onboarding actions
  until the workflow has been validated.

## Working and Git Style

- Make small changes in focused batches.
- Preserve unrelated existing work.
- Follow established project patterns before adding new dependencies or
  architecture.
- Do not commit directly to `main` unless explicitly instructed.
- Use feature branches for major work.
- Summarize changes before committing and ask for approval before merging.
- Run every applicable available build, lint, test, or typecheck command before
  summarizing changes.
- Do not claim a check passed if the corresponding command is not configured or
  was not run.

Before finishing a major task, confirm routes, navigation, forms, CTAs, SEO
metadata, mobile behavior, corporate-pricing privacy, build health, and the
absence of sensitive data or unsupported claims.

## Task Summary

After each task, summarize:

- Every file changed
- The purpose of each change
- The verification commands run and their results
- Any known limitations, risks, or owner decisions still needed
