# Momentum Wellness Form Storage And Privacy Workflow

This workflow explains how Momentum Wellness should handle contact submissions,
readiness forms, liability waivers, and internal tracker records during the
manual launch phase.

This is an operating guide, not legal advice. The owner should review privacy,
liability, refund, and retention rules with the appropriate professional before
scaling.

## Core Rule

Use the minimum information needed for the business workflow. Do not store
medical details, health histories, payment information, passwords, progress
photos, food logs, or signed legal documents in public code, GitHub issues,
routine chat messages, or the shared onboarding tracker.

## Contact Form Submissions

Current system:

- Website contact form submits through Formspree.
- Notifications are sent to the Momentum Wellness business email.
- Formspree stores submitted contact fields.

Recommended handling:

1. Review new submissions from the business email or Formspree dashboard.
2. Classify the lead as:
   - Individual coaching
   - Corporate wellness
   - General question
3. Create an onboarding tracker record only when follow-up is needed.
4. Copy only operational information into the tracker:
   - Name
   - Email
   - Company name when relevant
   - Lead type
   - Status
   - Owner
   - Next action
   - Short business notes
5. Do not copy private health details into the tracker.
6. Use the approved lead response templates for manual replies.

## Trainerize Readiness Forms

Current system:

- Readiness and consultation forms are handled through Trainerize.
- Trainerize should remain the source of truth for client form responses.

Recommended handling:

1. Review readiness responses inside Trainerize.
2. If a response needs human review, update the tracker status only:
   - `Needs review`
   - `Blocked`
   - `Waiting for client`
3. Record only operational notes in the tracker.
4. Do not copy medical details or readiness answers into the tracker.
5. Do not describe Momentum Wellness as medically clearing a client.

## Liability Waivers

Current system:

- Liability waiver template files exist in `/docs/onboarding`.
- Signed client waivers should be stored in the client's Trainerize profile.
- Trainerize should remain the source of truth for signed client waivers.

Recommended handling:

1. Store signed waivers in the client's Trainerize profile, not in the website
   repo, GitHub, routine email threads, or the onboarding tracker.
2. Use the tracker only to mark operational status:
   - `Waiver sent`
   - `Waiver received`
   - `Waiver needs review`
3. Confirm the signed waiver is attached to the correct Trainerize client
   profile before marking it complete.
4. Do not upload signed waivers to GitHub.
5. Do not paste waiver contents, signatures, or private client data into the
   tracker.

## Payment And Billing Data

Current system:

- Individual billing is handled through Trainerize and Stripe.

Recommended handling:

1. Use Stripe and Trainerize as the source of truth for payment status.
2. Never request card numbers by email, website form, text, or tracker note.
3. In the tracker, record only operational outcomes such as:
   - `Payment confirmed`
   - `Payment follow-up sent`
   - `Cancellation requested`
   - `Subscription ended`
4. Do not store payment details, decline codes, bank data, or receipts in the
   tracker.

## Shared Onboarding Tracker

Use the tracker for workflow management only.

Approved tracker content:

- Lead/client/company name
- Contact email
- Type of record
- Workflow source
- Status
- Owner
- Next action
- Next action date
- Short operational notes
- Checklist completion

Do not enter:

- Medical details
- Health histories
- Readiness answers
- Signed documents
- Payment details
- Passwords
- Food logs
- Progress photos
- Private purchase data

## Retention Guidance

Owner decision still needed.

Recommended starting point:

- Keep active lead and client workflow records only as long as they support a
  reasonable business need.
- Close or archive records when the workflow is complete.
- Delete obvious test records after verification.
- Review Formspree and Trainerize retention settings before scaling.
- Create a written retention policy before launching larger campaigns or
  corporate programs.

## Privacy Inquiry Process

If someone asks about their information:

1. Confirm the request through the approved business email.
2. Identify which systems may contain the record:
   - Formspree
   - Business email
   - Trainerize, including client profiles and signed waivers
   - Stripe
   - Shared onboarding tracker
3. Do not send private information to an unverified requester.
4. Respond with a practical next step and timeline.
5. Document the operational status without copying sensitive details.

## Owner Decisions Still Needed

- Who reviews readiness forms.
- How long Formspree submissions are retained.
- How long tracker records are retained.
- How cancellation/refund records are retained.
- Whether a legal professional should revise the public legal page and any
  future waiver changes.
