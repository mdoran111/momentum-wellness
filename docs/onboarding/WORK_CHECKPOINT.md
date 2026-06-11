# Onboarding Package Completion Record

Paused on June 9, 2026 and completed on June 10, 2026.

## Completed

- Drafted the Adult Strength custom welcome email.
- Drafted a 75-second portrait welcome-video script and recording guidance.
- Drafted the Trainerize first-sign-in message.
- Drafted the Trainerize Exercise Readiness & Consultation questions.
- Created editable and printable readiness/consultation forms.
- Created editable and printable liability-waiver templates.
- Clearly marked the waiver for New Mexico attorney review before use.
- Updated the workflow to use Trainerize with its direct Stripe connection.
- Documented that Zapier is not required for the current purchase and
  program-start workflow.
- Visually reviewed all pages of both forms and corrected awkward page breaks.
- Added and enabled the Adult Strength custom welcome email in Trainerize.
- Added the Adult Strength Exercise Readiness & Consultation Form in
  Trainerize and confirmed its preview renders.
- Added and enabled the Adult Strength first-sign-in message in Trainerize.
- Confirmed the existing `parq-trainerize.pdf` attachment remains in place.
- Confirmed the liability waiver was reviewed and approved by a licensed New
  Mexico attorney.
- Uploaded the approved liability-waiver PDF to the Trainerize `WAIVER`
  attachment slot.
- Confirmed the welcome-video upload requires a portrait `.mp4` or `.mov`,
  1080 x 1920 pixels, and a duration under two minutes.
- Ran `npm run typecheck` successfully.
- Ran `npm run build` successfully.

## Current Files

- `ADULT_STRENGTH_ONBOARDING_CONTENT.md`
- `Momentum_Wellness_Exercise_Readiness_Consultation_Form.docx`
- `Momentum_Wellness_Exercise_Readiness_Consultation_Form.pdf`
- `Momentum_Wellness_Liability_Waiver_TEMPLATE.docx`
- `Momentum_Wellness_Liability_Waiver_TEMPLATE.pdf`

## Final Verification

- Both DOCX files were re-exported after adding alternative text to the logo.
- Both accessibility audits report zero high-severity findings.
- Remaining medium notices concern form-layout tables without header rows; they
  are expected because these are fillable fields rather than data tables.
- All three waiver pages and all four consultation-form pages passed visual
  inspection.
- Website typecheck and build passed.
- Trainerize welcome email, consultation form, and first-sign-in message were
  saved and verified.
- The live shared onboarding tracker was connected to a private Neon production
  database and verified to retain a test record after refresh.
- A business partner successfully signed in to the protected internal tools.
- A Full Access, one-way messaging test client received the invitation,
  customized welcome email, PAR-Q, approved waiver, consultation form, and
  first-sign-in automated message.
- With one-way messaging, the client does not see a standard Messages section.
  The automated message is accessed through the red notification indicator on
  the client's profile picture.
- Confirmed that the Adult Strength product-start automation subscribes clients
  to the master program named `Strength in Momentum`.
- A manually added client does not trigger the product-start program
  subscription, so the test account was subscribed manually.
- Set the test client's Calendar look-ahead to `Follow Training Phase`. This
  shows the complete current four-week phase while keeping the next phase off
  the calendar until it begins.
- Add `Set Calendar look-ahead to Follow Training Phase` to the manual
  new-client verification checklist unless Trainerize adds this option to the
  product automation.
- Verified the test client could see `Strength in Momentum`, open Phase 1,
  view exercise demonstrations, and see the three weekly workouts across the
  complete current phase after refreshing the client app.
- Confirmed Phase 2 remains outside the current client calendar view until its
  scheduled start.
- Completed the cancellation cleanup test on the manual test account:
  confirmed there was no Main Product or payment subscription, unsubscribed
  the client from `Strength in Momentum`, verified the training content was
  removed, and deactivated the account.
- Trainerize confirmed that deactivation removes all app access. Use this only
  after confirming the client's paid product is canceled or ended and the
  program subscription has been removed.
- Verified from the deactivated test login that access is blocked; Trainerize
  returned a sign-in failure after deactivation.

## Test Status

The manual onboarding and exception workflow is verified end to end:

- Invitation and custom welcome email
- PAR-Q and approved waiver delivery
- Consultation form completion
- First-sign-in automated message delivery
- One-way messaging notification behavior
- Manual `Strength in Momentum` subscription
- Phase-based calendar visibility
- Workout and exercise-content access
- Program removal
- Client deactivation and blocked sign-in

- The business owner confirmed that an actual Adult Strength purchase and
  cancellation test was completed successfully.
- The user still needs to record and upload the welcome video.
- Trainerize now includes both the existing PAR-Q attachment and the approved
  liability-waiver attachment in the customized welcome-email setup.
- The business partner still needs to create, edit, and delete a tracker test
  record to verify shared write access end to end.
- Staff operating procedures now cover individual purchases, failed payments,
  cancellation and deactivation, manual client entry, and corporate wellness
  inquiries.

## Important

- Do not publish or use the liability waiver with clients until a licensed New
  Mexico attorney reviews and approves it.
- Do not commit completed client forms, signatures, medical information, or
  other private client data to this repository.
