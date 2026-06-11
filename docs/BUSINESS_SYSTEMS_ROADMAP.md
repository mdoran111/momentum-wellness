# Momentum Wellness Business Systems Roadmap

## Purpose

This roadmap describes how the Momentum Wellness website and future backend
systems could gradually support business operations. It is a planning document,
not an implementation specification or approval to build, connect, or automate
the systems described below.

Work should proceed in focused phases. Each phase should preserve the public
website, protect client information, use secure credentials, and keep a human
review step until the related workflow has been tested and approved.

## Operating Principles

- Keep individual and corporate customer journeys clearly separated.
- Never display corporate wellness pricing publicly.
- Collect only the information required for a defined business purpose.
- Never store credentials or sensitive client information in public code.
- Use environment variables and secure backend patterns for integrations.
- Do not assume Trainerize API or webhook access exists until confirmed.
- Use a safe manual workflow whenever an integration is unavailable or
  incomplete.
- Require human approval before sensitive, irreversible, or client-facing
  automation until the workflow is fully tested.
- Define ownership, failure handling, duplicate prevention, privacy, and
  retention rules before launching a new system.

## Phase 1: Website and Brand Foundation

### Goal

Establish a credible public website that explains Momentum Wellness clearly
and directs each audience to the right next step.

### Planned Capabilities

- Clean, premium, professional public website
- Clear sales paths for individuals and companies
- Strong, relevant calls to action
- Unique SEO titles and meta descriptions
- Working contact forms
- Consultation-based corporate wellness path
- No public corporate wellness pricing

### Completion Gate

- Public routes, navigation, forms, CTAs, metadata, and mobile layouts have
  been reviewed.
- Individual and corporate offers remain clearly separated.
- No unsupported health claims or private client information are present.

## Phase 2: Lead Capture and Segmentation

### Goal

Organize incoming interest so Momentum Wellness can identify the inquiry type,
respond appropriately, and track follow-up.

### Planned Capabilities

- Individual coaching leads
- Corporate wellness leads
- General inquiries
- Inquiry type dropdown
- Better fields based on inquiry type
- Internal lead status tracking

### Suggested Lead Statuses

- New
- Needs review
- Contacted
- Consultation scheduled
- Qualified
- Not ready
- Converted
- Closed

### Planning Requirements

- Choose the approved lead system, such as a CRM, Airtable, Supabase, Google
  Sheets, or another secure database.
- Define required fields, record ownership, follow-up expectations, retention,
  and deletion rules.
- Avoid collecting sensitive health information through general lead forms.

## Phase 3: Client Onboarding Workflow

### Goal

Create a reliable, reviewable path from a purchase or qualified inquiry to a
prepared client onboarding experience.

### Current Foundation

- A password-protected shared onboarding tracker is available at
  `/admin/onboarding-tracker`.
- It creates separate individual and company records with the appropriate
  human-reviewed checklist and status options.
- It tracks an owner, workflow status, next action, target date, checklist
  progress, and non-sensitive operational notes.
- Records are stored in PostgreSQL and are shared across approved team
  members who use the protected admin area.
- It does not send email, connect to Trainerize, process payments, or transmit
  data to an external service.
- It uses server-verified shared password access when `ADMIN_TOOL_PASSWORD` and
  `SESSION_SECRET` are configured in the deployment environment.
- The password is not embedded in frontend code. Access is maintained with a
  signed HTTP-only session cookie.
- Updates use record revisions to warn when another browser has saved a newer
  version, reducing accidental overwrites.
- Existing browser-only records can be imported explicitly and are removed
  from local storage only after a successful import.
- It must not be used for medical information, health histories, progress
  photos, food logs, payment details, credentials, or other sensitive data.
- The Adult Strength product is sold through Trainerize for $150 per month,
  with Stripe connected inside Trainerize.
- On the purchase date, the current product setup gives the client Full Access
  with one-way messaging and subscribes the client to Adult Strength.
- This confirmed purchase path does not require Zapier.

### Planned Workflow

1. Receive a confirmed Trainerize/Stripe purchase or qualified inquiry event.
2. Create a minimal client record in an approved system.
3. Send an internal notification.
4. Draft or send the approved welcome email.
5. Create an onboarding checklist.
6. Confirm that the Trainerize invitation and Adult Strength assignment were
   created as expected.
7. Track program assignment.
8. Require human approval before sensitive or irreversible actions until the
   workflow is fully tested.

### Planning Requirements

- Define the authoritative source for purchase and client status.
- Prevent duplicate records and duplicate welcome messages.
- Define retry and failure behavior.
- Identify which steps are automated, prepared for review, or manual.
- Never place client health details, progress photos, food logs, medical
  information, or private purchase data in public code.

## Phase 4: Trainerize Support Workflow

### Goal

Reduce repetitive setup work while maintaining a safe manual path when
Trainerize integrations are unavailable.

### Current and Future Integration Paths

- Current path: Trainerize product automation with Stripe connected directly
  inside Trainerize
- Trainerize API or webhooks only if a future workflow needs capabilities not
  covered by the product setup and access is confirmed
- Manual admin-task fallback for failed invitations, readiness review,
  cancellations, and other exceptions
- Approved staging through Google Sheets, Airtable, Supabase, or a secure
  database
- Internal email notification fallback

### Planned Capabilities

- Client setup checklist
- Program assignment checklist
- Trainerize invitation preparation
- Welcome email workflow
- Setup status and completion tracking

### Approval Gate

Test the confirmed Trainerize/Stripe product flow with a non-client test
account before treating it as production-ready. Keep human review for exercise
readiness concerns, signed-waiver confirmation, failed invitations, duplicate
records, and cancellation/deactivation. Confirm API or webhook access only if
a later phase requires additional direct automation.

## Phase 5: Corporate Wellness Sales Tools

### Goal

Support the consultation-based company sales process without exposing private
pricing or prospect information publicly.

### Planned Capabilities

- Corporate wellness calculator
- Proposal generator
- Company lead dashboard
- Follow-up reminders
- Consultation workflow
- Proposal status tracking

### Suggested Proposal Statuses

- Discovery
- Consultation scheduled
- Needs assessment
- Drafting
- Internal review
- Sent
- Follow-up
- Accepted
- Declined
- On hold

### Planning Requirements

- Keep calculators and proposal tools internal.
- Store prospect and proposal information in an approved secure system.
- Require review before sending proposals or changing deal status.
- Do not promise medical outcomes, healthcare-cost savings, or guaranteed
  workforce results.

## Phase 6: Marketing Systems

### Goal

Create repeatable marketing planning and follow-up systems for individual,
corporate, and future Albuquerque location initiatives.

### Planned Capabilities

- Content calendar
- Campaign planner
- Email sequences
- Corporate outreach tracker
- Individual lead nurture system
- Albuquerque physical location campaign planning

### Planning Requirements

- Define audience, owner, objective, channel, review status, and success metric
  for each campaign.
- Require approval before sending automated email sequences.
- Keep corporate and individual messaging segmented.
- Establish consent, unsubscribe, and data-retention requirements before
  launching email automation.

## Phase 7: Future Backend Operations

### Goal

Create secure internal systems that give Momentum Wellness a reliable view of
clients, leads, tasks, and business activity.

### Planned Capabilities

- Admin dashboard
- Client status dashboard
- Corporate lead status dashboard
- Internal task system
- Reporting tools
- Secure environment variables
- Privacy review

### Architecture and Privacy Requirements

- Use authenticated internal access with role-based permissions where needed.
- Keep secrets in environment variables or an approved secret manager.
- Separate public website data from private operational data.
- Define backups, auditability, retention, deletion, and incident response.
- Limit access to sensitive client and prospect information.
- Complete a privacy and security review before storing health-related or
  purchase information.

## Recommended Sequence

1. Maintain and verify the public website foundation.
2. Choose a secure lead system and document lead ownership.
3. Build the manual onboarding checklist before automating it.
4. Test and document the confirmed Trainerize/Stripe purchase, activation,
   program assignment, cancellation, and deactivation behavior.
5. Automate one reviewed onboarding step at a time.
6. Add corporate sales tracking around the existing internal tools.
7. Add marketing planning and approved nurture workflows.
8. Build authenticated backend dashboards only after the underlying records,
   permissions, and privacy rules are defined.

## Not Included Yet

This roadmap does not authorize or implement:

- A CRM or database
- Payment processing
- Automated Trainerize account changes
- Automated welcome emails
- Client or employee health-data storage
- Public corporate pricing
- Unattended proposal sending
- A production admin dashboard
- Marketing email delivery

Each capability requires a separate scoped task, owner approval, implementation
plan, verification process, and privacy review where applicable.
