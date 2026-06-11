# Momentum Wellness Business Model

## Overview

Momentum Wellness is an app-based fitness, nutrition, habit, accountability,
and community wellness company serving two customer segments:

1. Individuals who want training, nutrition structure, habit coaching,
   accountability, progress tracking, and community support.
2. Companies with 50 or more employees that want programs focused on workforce
   health, energy, morale, accountability, and culture.

Both offers use the five pillars of Training, Nutrition, Habits,
Accountability, and Community.

## Revenue Streams

### Individual Membership

The current public offer is a recurring monthly membership:

- Price: `$150 per month`
- Billing: Monthly
- Commitment: Cancel anytime
- Positioning: Complete wellness coaching through the Momentum Wellness app

Before changing or integrating payments, confirm the current price, billing
provider, refund policy, cancellation process, taxes, and app-access workflow
with the business owner.

### Corporate Wellness

Corporate wellness is a consultative B2B offer for companies with 50 or more
employees.

- Pricing is not public.
- The primary CTA is **Book a Corporate Wellness Consultation**.
- Scope is expected to depend on employee count, company needs, and
  implementation requirements.
- Delivery includes consultation-based setup, company-wide engagement,
  progress tracking, and employer-level reporting.

Do not invent corporate packages, prices, contract terms, service commitments,
or return-on-investment claims.

## Customer Segments

### Individuals

Primary audiences include:

- Beginners who need a clear starting point
- Intermediate exercisers who want progressive programming
- People pursuing fat loss or muscle gain
- Busy professionals who need structure
- People who need accountability and consistency
- Fitness enthusiasts who want evolving monthly programming

### Companies

The current target is companies with 50 or more employees, including teams in
offices, healthcare, logistics, manufacturing, and trades.

Likely buyers include owners, executives, HR leaders, benefits leaders, and
people-operations teams. This buyer list is a working assumption and should be
validated before targeted sales work.

## Value Proposition

Momentum Wellness differentiates through:

- A structured system rather than a generic content library
- One app for training, nutrition, habits, progress, and community
- Distinct pathways for individual members and company-wide programs
- Monthly programming and repeatable routines
- Accessibility at home, in a gym, or on the go
- Support for different fitness levels
- A focus on sustainable behavior change

## Delivery Model

### Individual Journey

1. Choose a membership.
2. Receive app access.
3. Set goals and select a program path.
4. Follow training, nutrition, and habit targets.
5. Track progress and complete check-ins.
6. Continue through monthly phases.

The website currently links the individual **Start Your Program** CTA to a
Trainerize enrollment page. Adult Strength is configured at $150 per month with
Stripe connected inside Trainerize. On the purchase date, the product is
configured to give the client Full Access with one-way messaging and subscribe
the client to Adult Strength. The full workflow, especially cancellation and
manual deactivation, must still be tested before being described as completely
automated.

### Corporate Journey

1. Consultation
2. Company and workforce discovery
3. Program setup
4. Employee onboarding and launch
5. Engagement through app-based structure and community
6. Progress tracking and employer-level reporting
7. Ongoing support

Operational details, reporting, contracts, and support capacity require owner
approval.

## Key Business Metrics

Future systems may measure, where lawful and appropriate:

- Individual visitor-to-lead conversion
- Individual lead-to-member conversion
- Monthly recurring revenue
- Member activation and retention
- Cancellation rate
- Corporate qualified leads
- Consultation booking rate
- Proposal-to-close rate
- Employee activation and ongoing engagement

Do not collect sensitive health data without a defined need, consent model,
retention policy, security plan, and legal review.

## Client Data Rules

Never hard-code or commit:

- API keys
- Trainerize, email, or payment credentials
- Client names
- Client health information
- Client progress photos
- Food logs
- Medical details
- Private purchase data

Use environment variables and secure backend patterns for credentials and
integrations. Store only the minimum data required for an approved workflow.

## Current Systems and Gaps

- The contact form submits to Formspree through an environment-configured
  endpoint.
- The individual CTA links to Trainerize. The connected Stripe purchase,
  same-day Full Access, one-way messaging, and Adult Strength subscription are
  configured; readiness review, waiver confirmation, exception handling, and
  cancellation/deactivation remain human-reviewed.
- No CRM or lead routing is connected.
- A lightweight internal event utility exists, but no third-party analytics
  provider is configured.
- No automated onboarding is configured.
- Corporate pricing and packaging are intentionally undefined.
