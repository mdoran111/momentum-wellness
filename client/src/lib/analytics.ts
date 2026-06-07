export const analyticsEvents = {
  exploreIndividualPrograms: "cta_explore_individual_programs",
  viewEmployeeWellness: "cta_view_employee_wellness",
  startProgram: "cta_start_program",
  bookCorporateConsultation: "cta_book_corporate_consultation",
  contact: "cta_contact",
  submitContactForm: "form_submit_contact",
  viewPricing: "cta_view_pricing",
  insideApp: "cta_inside_app",
} as const;

export type AnalyticsEvent =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export function trackEvent(
  event: AnalyticsEvent,
  properties?: AnalyticsProperties,
) {
  if (!import.meta.env.DEV) {
    return;
  }

  console.info("[analytics]", event, properties ?? {});
}
