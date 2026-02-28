export default function BenefitsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Benefits</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Clear value for students and faculty.</h1>
        <p className="text-base text-slate-600">
          EDUGUILD ensures academic materials are accessible, organized, and aligned with institutional expectations.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Student continuity",
            body: "New cohorts inherit organized resources without searching across informal channels."
          },
          {
            title: "Faculty confidence",
            body: "Faculty can publish verified materials with clear attribution and department alignment."
          },
          {
            title: "Operational efficiency",
            body: "Administrators reduce duplicate requests by centralizing academic assets."
          },
          {
            title: "Policy alignment",
            body: "No direct file uploads keeps storage policy compliant and low risk."
          },
          {
            title: "Rapid onboarding",
            body: "Formal public pages and guided forms ensure a smooth first-time experience."
          },
          {
            title: "Demonstration ready",
            body: "An MVP that runs smoothly for presentations, pilots, and funding reviews."
          }
        ].map((benefit) => (
          <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">{benefit.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{benefit.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
