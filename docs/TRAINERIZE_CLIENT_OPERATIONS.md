# Momentum Wellness Trainerize Client Operations

This playbook documents the manual operating system for running Adult Strength
inside Trainerize. It should be used before building automation.

Do not store Trainerize credentials, client health information, payment
details, signed forms, food logs, progress photos, or private client records in
this repository or the shared onboarding tracker.

## Current Operating Model

Current confirmed setup:

- Product: Adult Strength
- Price: `$150/month`
- Payment: Stripe connected inside Trainerize
- Access: Full Access with one-way messaging
- Product start: day of purchase
- Program start action: client is subscribed to `Strength in Momentum`
- Client waiver storage: signed waiver is stored in the client's Trainerize
  profile
- Cancellation: manually remove program access and deactivate the client when
  full app access should end

Trainerize remains the source of truth for:

- Client profile
- Program subscription
- Calendar
- Habit/behavior assignments
- Forms and readiness responses
- Signed waiver storage
- Program access
- Payment/product status visible through Trainerize and connected Stripe

The internal onboarding tracker is only for workflow status, owner, next
action, follow-up date, and brief operational notes.

## Weekly Client Message System

Start with manual weekly messages. Do not automate sending until the message
cadence has been tested with real client operations.

### Weekly Cadence

Recommended starting cadence:

- Monday: weekly focus message
- Wednesday or Thursday: accountability nudge
- Sunday: reflection and next-week prep

If that feels like too much, start with Monday only and add the other messages
after client flow is stable.

### Monday Weekly Focus

**Title:** This Week's Focus

Hi {firstName}, here is your focus for the week:

1. Complete your scheduled workouts.
2. Track your key habits.
3. Record your workouts in the app.
4. Keep your nutrition simple and consistent.

Do not worry about being perfect. The goal is to keep showing up, follow the
structure, and build momentum one day at a time.

### Midweek Accountability Nudge

**Title:** Midweek Check-In

Hi {firstName}, quick midweek reminder:

Open your calendar, check what is left this week, and choose the next action
you can complete today.

If the week has not gone as planned, do not restart next Monday. Adjust today
and keep moving.

### Sunday Reflection

**Title:** Weekly Review

Hi {firstName}, take a few minutes today to review your week:

- Which workouts did you complete?
- Which habits were strongest?
- What got in the way?
- What is one simple adjustment for next week?

Use the app to review your progress and get ready for the next week.

### Week One Welcome Follow-Up

**Title:** First Week Reminder

Hi {firstName}, welcome again to Adult Strength.

This first week is about learning the app, reviewing your schedule, completing
your forms, and getting comfortable with the program structure.

Before your first workout, make sure your readiness form and waiver are
complete. Then open your calendar, watch the exercise demonstrations, and log
your workouts as you go.

### Missed Workout Reset

**Title:** Reset and Continue

Hi {firstName}, if you missed a workout, do not treat that as failure.

Look at your calendar, choose the next realistic workout, and continue from
there. Momentum is built by returning to the plan, not by being perfect.

### New Phase Reminder

**Title:** New Phase Begins Soon

Hi {firstName}, your next training phase is coming up.

Before it starts, review the upcoming workouts, watch any unfamiliar exercise
demonstrations, and keep tracking your key habits. The goal is steady progress
and consistent follow-through.

### Form Or Waiver Reminder

**Title:** Action Needed Before Training

Hi {firstName}, please complete your required onboarding items before starting
the program:

1. Exercise Readiness & Consultation Form
2. Liability waiver

If you have already completed them, thank you. We will review the operational
status and continue the onboarding process.

Do not send medical records or sensitive information by message.

## Weekly Operations Checklist

Complete this once per week:

1. Review active clients in Trainerize.
2. Check whether any client has incomplete forms or missing waiver status.
3. Review workout completion and calendar visibility.
4. Send the weekly focus message.
5. Send midweek nudges if appropriate.
6. Send Sunday reflection if appropriate.
7. Update the onboarding tracker only for operational next actions.
8. Note any client who needs review, support, cancellation cleanup, or manual
   program access correction.

Do not copy readiness answers, medical details, private messages, food logs, or
progress photos into the tracker.

## Monthly Programming Checklist

Use this before a new monthly phase begins.

### Build Or Review The Phase

1. Confirm the next phase name.
2. Confirm workout days and weekly layout.
3. Confirm exercise selections.
4. Confirm sets, reps, rest guidance, and progression notes.
5. Confirm exercise demo links display correctly.
6. Confirm the phase supports the intended training level.
7. Avoid overloading the month with too many new habits or changes.

### Calendar And Visibility

1. Confirm the current phase appears for the full intended month.
2. Confirm future phases remain hidden until their scheduled start.
3. Confirm Calendar look-ahead is set to `Follow Training Phase` when needed.
4. Review the client app view with a test account when possible.
5. Confirm behaviors are visible on the correct days.

### Client Communication

1. Send a new-phase reminder before the phase begins.
2. Explain the focus of the phase in plain language.
3. Remind clients to watch demonstrations before new exercises.
4. Remind clients to track workouts and habits inside the app.
5. Avoid promising specific strength, weight-loss, or body-composition results.

### Internal Review

Before the phase goes live, confirm:

- The program is assigned to the correct clients.
- Workout calendar visibility is correct.
- Behaviors are assigned correctly.
- No future phase is visible too early.
- No client has unresolved readiness or waiver status before beginning.

## Behavior Calendar Plan

Start simple. Behaviors should support consistency without overwhelming new
clients.

### Core Behavior Categories

Recommended core behaviors:

- Protein with meals
- Water intake
- Workout completion
- Daily movement or steps
- Sleep routine
- Weekly check-in
- Recovery or mobility

Avoid medical or prescriptive language. Behaviors should be practical wellness
habits, not clinical treatment instructions.

### Month One Behavior Setup

Recommended starting behaviors:

- Eat protein with at least two meals
- Drink water consistently
- Complete scheduled workouts
- Complete weekly check-in

Optional if the client is ready:

- Daily walk or movement
- Sleep wind-down routine

### Month Two Behavior Setup

Build from Month One:

- Keep protein behavior
- Keep workout completion
- Add or emphasize steps/movement
- Add sleep consistency if appropriate
- Continue weekly check-in

### Month Three Behavior Setup

Build from prior months:

- Keep nutrition awareness
- Keep workout completion
- Keep weekly check-in
- Add recovery/mobility behavior if useful
- Review consistency and adjust behaviors rather than adding too many

## Automation Roadmap

Do not connect automation directly to Trainerize until access and reliability
are confirmed.

### Safe First Automation

Start with internal reminders:

- Reminder to send weekly client message
- Reminder to review client check-ins
- Reminder to review upcoming monthly phase
- Reminder to confirm waiver/form status
- Reminder to handle cancellation cleanup

### Next Automation

After the manual workflow is stable:

- Draft weekly messages for human review
- Draft new-phase messages for human review
- Create tracker next-action reminders
- Create admin checklist reminders

### Later Automation If Trainerize Supports It

Only if Trainerize API, webhook, or approved integration access is confirmed:

- Send scheduled weekly messages
- Assign or update behaviors
- Confirm program phase visibility
- Update internal client status from Trainerize events

Keep a manual fallback for every automated action.

## Failure Points To Watch

- Client does not receive invite.
- Client does not complete readiness form.
- Signed waiver is missing from Trainerize profile.
- Program is not subscribed correctly.
- Calendar only shows part of the intended phase.
- Future phase appears too early.
- Behaviors are missing or assigned to wrong days.
- Client cancels but app access remains active.
- Client is deactivated before paid access should end.

## Manual Fallback

When something fails:

1. Fix the issue manually inside Trainerize.
2. Verify the client view when possible.
3. Record the operational issue in the onboarding tracker.
4. Do not copy private details into the tracker.
5. Add a checklist improvement if the issue may happen again.

