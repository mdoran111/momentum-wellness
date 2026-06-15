# Momentum Wellness Operating Procedures

These procedures provide a human-review-first process for Adult Strength
clients and corporate wellness inquiries. They support the shared onboarding
tracker but do not replace Trainerize, Stripe, approved forms, or professional
judgment.

## General Rules

- Use the minimum information needed to manage the workflow.
- Do not put medical details, health histories, payment information,
  passwords, signed forms, progress photos, or food logs in the tracker.
- Record operational outcomes only, such as `Needs Review`, `Waiting for
  Client`, `Active`, or `Closed`.
- Confirm sensitive and irreversible actions before completing them.
- Never state that Momentum Wellness medically cleared a client.
- Use the secure Trainerize and Stripe records as the source of truth for
  subscriptions, payments, forms, and program access.

## 1. Individual Purchase

Use this procedure when an individual purchases Adult Strength through the
approved Trainerize enrollment page.

### Trigger

Trainerize and Stripe show a successful Adult Strength purchase.

### Procedure

1. Confirm the purchase is for Adult Strength at the approved current price.
2. Confirm the payment status is successful in the connected Stripe or
   Trainerize record. Do not copy payment details into the tracker.
3. Search the shared onboarding tracker for the client's email to prevent a
   duplicate record.
4. Create an individual tracker record:
   - Source: `Individual purchase`
   - Status: `Needs review`
   - Owner: person responsible for onboarding
   - Next action: `Verify Trainerize onboarding and forms`
5. Confirm Trainerize sent the standard invitation and approved Momentum
   Wellness welcome email.
6. Confirm the consultation form, PAR-Q attachment, and approved liability
   waiver were delivered.
7. Confirm the signed waiver is stored in the client's Trainerize profile.
8. Review the readiness response in its secure source. If review is required:
   - Set the tracker status to `Needs review` or `Blocked`.
   - Record only the operational outcome.
   - Do not copy medical details into the tracker.
9. Confirm the client is subscribed to `Strength in Momentum`.
10. Set Calendar look-ahead to `Follow Training Phase` if Trainerize has not
   applied it automatically.
11. Confirm the client can see the current phase, scheduled workouts, exercise
    demonstrations, habits, and first-sign-in message.
12. Update the tracker:
    - Status: `Active`
    - Next action: first planned client check-in
    - Next action date: agreed check-in date
13. Mark checklist items complete only after each item is verified.

### Manual Fallback

If an invitation, form, program subscription, or message does not appear,
complete that action manually in Trainerize, note the operational exception in
the tracker, and verify the client experience before marking onboarding
complete.

## 2. Failed Payment

Use this procedure when Stripe or Trainerize reports that an Adult Strength
payment failed.

### Procedure

1. Verify the failed-payment status in Stripe or Trainerize.
2. Confirm whether the platform is already retrying the payment.
3. Find the client in the tracker and assign an owner.
4. Set:
   - Status: `Blocked`
   - Next action: `Follow up about failed payment`
   - Next action date: the next appropriate business day
5. Contact the client through the approved business channel. Ask them to
   update their payment method through the secure billing interface.
6. Do not request or accept card information by email, text, the tracker, or
   the website contact form.
7. Confirm whether program access remains active during the retry period.
8. When payment succeeds, restore the appropriate workflow status and verify
   program access.
9. If payment remains unresolved, follow the cancellation procedure before
   removing access.

### Tracker Note

Use a note such as `Payment follow-up sent; waiting for client`. Never record
card numbers, bank details, decline codes, or private billing information.

## 3. Cancellation And Deactivation

Use this procedure after a client requests cancellation or when a subscription
ends according to the approved billing policy.

### Procedure

1. Confirm the request came from the client or an authorized account contact.
2. Review the active subscription and applicable cancellation or refund terms
   in Stripe or Trainerize.
3. Confirm the subscription is canceled or scheduled to end. Do not rely only
   on a tracker note.
4. Confirm whether a refund is required under the approved policy. Process any
   approved refund in Stripe, never in the tracker.
5. Record the effective program-end date in the tracker's next action date.
6. On the effective end date, unsubscribe the client from `Strength in
   Momentum`.
7. Verify the training program is no longer visible to the client.
8. Deactivate the Trainerize client when full app access should end.
9. Verify the deactivated account can no longer sign in.
10. Update the tracker:
    - Status: `Closed`
    - Next action: blank, unless follow-up is required
    - Note: brief operational outcome only
11. Retain or delete business records according to approved legal, tax, and
    privacy requirements.

### Important

Do not deactivate a client until the paid subscription is canceled or ended
and the intended access period is complete.

## 4. Manual Client Entry

Use this procedure for a legitimate client who was not automatically created
through an Adult Strength purchase.

### Procedure

1. Confirm why manual entry is needed and that the person should receive
   access.
2. Search Trainerize and the shared tracker for the email to prevent duplicate
   accounts.
3. Create the Trainerize client with the approved access and messaging level.
4. Create an individual tracker record:
   - Source: `Manual admin entry`
   - Status: `Trainerize pending`
   - Owner: responsible administrator
5. Send or confirm the invitation, welcome email, consultation form, PAR-Q,
   and approved liability waiver.
6. Confirm the signed waiver is stored in the client's Trainerize profile.
7. Review readiness responses using the same human-review rule as a purchased
   client.
8. Manually subscribe the client to `Strength in Momentum` when appropriate.
9. Set Calendar look-ahead to `Follow Training Phase`.
10. Verify app access, current-phase visibility, workouts, exercise
   demonstrations, habits, and first-sign-in message.
11. Set the tracker to `Active` and schedule the first check-in.

### Important

A manual Trainerize entry does not necessarily trigger the Adult Strength
product-start automation. Verify every onboarding item individually.

## 5. Corporate Wellness Inquiry

Use this procedure when a company submits a qualified employee wellness
inquiry or an administrator enters one manually.

### Procedure

1. Confirm the inquiry includes a company name, contact name, valid business
   email, approximate employee count, and a reasonable wellness goal.
2. Search the tracker for the company or email to prevent duplicates.
3. Create a company tracker record:
   - Source: `Corporate wellness inquiry` or `Manual admin entry`
   - Status: `Needs review`
   - Owner: person responsible for follow-up
   - Next action: `Send corporate follow-up and schedule consultation`
4. Send the approved corporate follow-up email.
5. Offer a corporate wellness consultation and record the next follow-up date.
6. During discovery, confirm:
   - Company size and locations
   - Decision makers
   - Primary workforce goals
   - Desired timing
   - Engagement and reporting expectations
7. Do not collect employee health information during the sales process.
8. Set the status to `Qualified` only when the company appears appropriate for
   the consultation-based program.
9. Use the corporate calculator and proposal generator only after sufficient
   details are available.
10. Review every proposal internally before sending it.
11. Track the next action until the opportunity is `Won`, `Lost`, or `On
    hold`.

### Public Pricing Rule

Corporate wellness pricing is consultation-based and must not be displayed on
public website pages, public documents, or public SEO metadata.

## Pending Verification

- Business partner must create, edit, and delete a tracker test record.
- Record and upload the custom Momentum Wellness welcome video when ready.
