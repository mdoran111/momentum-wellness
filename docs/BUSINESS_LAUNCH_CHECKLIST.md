# Momentum Wellness Business Launch Checklist

This is the running checklist for getting Momentum Wellness fully operating.
Update it as items are completed, blocked, or intentionally deferred.

Do not store passwords, payment details, client health information, signed
forms, progress photos, food logs, or private client records in this document.

## 1. Website And Public Lead Capture

Status: mostly complete.

- [x] Public website published at `https://momentumwellness.health`.
- [x] Individual and corporate website paths are clear.
- [x] Individual pricing remains public at `$150/month`.
- [x] Corporate wellness pricing is not public.
- [x] Contact form submits through Formspree.
- [x] Formspree notifications send to the business email.
- [x] Sitemap and robots rules are live.
- [x] Admin pages are excluded from public navigation and sitemap.
- [ ] Do one final public-page review before paid marketing or outreach.
  Local review found duplicate default meta descriptions; fix is ready and
  should be rechecked after deployment.

## 2. Business Email And Manual Replies

Status: mostly complete.

- [x] Confirm Formspree notification delivery to the business email.
- [x] Create reusable lead response templates.
- [ ] Save the lead response templates somewhere easy to access from the
  business email account.
- [x] Decide normal response-time expectation for public inquiries.
- [ ] Decide who responds to individual leads, corporate leads, and general
  questions.

## 3. Admin Tools And Internal Access

Status: functional, partner verification still needed.

- [x] Secure internal admin dashboard exists.
- [x] Corporate calculator exists.
- [x] Proposal generator exists.
- [x] Location feasibility calculator exists.
- [x] Shared onboarding tracker exists.
- [x] Tracker records persist in the private database.
- [x] Admin pages require the shared password.
- [ ] Business partner should create, edit, and delete one test tracker record.
- [ ] Remove any remaining test records after partner verification.

## 4. Individual Client Onboarding

Status: first manual workflow tested, operating procedure documented.

- [x] Trainerize Studio Plus confirmed.
- [x] Adult Strength product configured at `$150/month`.
- [x] Stripe connected through Trainerize.
- [x] Program starts on purchase date.
- [x] Client receives app access.
- [x] One-way messaging behavior verified.
- [x] Forms display correctly in Trainerize.
- [x] Calendar look-ahead adjusted so Phase 1 displays correctly.
- [x] Cancellation/deactivation workflow tested.
- [x] Operating procedure documented.
- [x] Signed client waivers will be stored in each client's Trainerize profile.
- [ ] Record and upload custom Momentum Wellness welcome video when ready.
- [ ] Run a final dummy-client onboarding test before accepting a real client.
- [ ] Confirm who reviews readiness and consultation forms.

## 5. Corporate Wellness Sales Workflow

Status: ready for manual use.

- [x] Corporate sales playbook created.
- [x] Consultation questions documented.
- [x] Corporate follow-up templates documented.
- [x] Proposal generator tested with fictional company data.
- [x] Corporate calculator tested with fictional company data.
- [ ] Decide the first corporate outreach list or target segment.
- [x] Create a simple outreach tracker or use the onboarding tracker for early
  corporate leads.
- [x] Prepare one polished sample corporate proposal for internal review.

## 6. Privacy, Legal, And Data Handling

Status: practical rules are documented; owner review still needed.

- [x] Website includes privacy and legal language.
- [x] Internal docs warn against storing sensitive health/payment data in code
  or tracker records.
- [x] Contact form privacy notice is live.
- [x] Draft form storage and privacy workflow.
- [x] Confirm signed waivers are stored in each client's Trainerize profile.
- [ ] Owner should review legal, liability, privacy, and refund language.
- [ ] Confirm retention expectations for contact submissions, tracker records,
  forms, and client files.
- [ ] Confirm readiness and consultation form retention rules.

## 7. Publishing And Git Hygiene

Status: working but requires normal care.

- [x] Website is connected to GitHub and Replit.
- [x] Major updates have been merged through pull requests.
- [x] Replit publish flow has been tested.
- [ ] Sync Replit with GitHub after each merged PR before republishing.
- [ ] Do not commit directly to `main` unless explicitly approved.
- [ ] Remove old local/editor temporary files when safe.

## 8. Marketing And Launch Prep

Status: in progress.

- [ ] Choose launch audience: individual clients, corporate leads, or both.
- [x] Create a short first-week launch plan.
- [x] Prepare social media announcement copy.
- [x] Prepare business email announcement copy.
- [x] Prepare a basic corporate outreach message.
- [x] Decide whether to start with warm contacts before cold outreach.
- [ ] Add analytics provider only after the first launch flow is stable.

## Recommended Next Order

1. Save the lead response templates somewhere easy to use from business email.
2. Have the business partner test admin access and tracker CRUD.
3. Run one final dummy-client onboarding test in Trainerize.
4. Confirm readiness-form review, retention rules, and legal/privacy review
   needs.
5. Prepare a sample corporate proposal.
6. Build or choose a simple outreach tracker.
7. Create the first launch announcement and outreach messages.
8. Add analytics only after lead capture and onboarding are stable.
