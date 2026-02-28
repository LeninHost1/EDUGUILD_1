export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About EDUGUILD</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">A formal academic portal built for reliability.</h1>
        <p className="text-base text-slate-600">
          EDUGUILD provides institutions with a consistent, trustworthy space to distribute academic resources,
          coordinate departmental materials, and elevate collaboration across campuses.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Our mission</h2>
          <p className="mt-3 text-sm text-slate-600">
            Deliver a dependable academic resource system that supports students, faculty, and administrators in every term.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Built for institutions</h2>
          <p className="mt-3 text-sm text-slate-600">
            Formal navigation, consistent branding, and clear access controls ensure the platform fits higher education standards.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">What EDUGUILD delivers</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>Reliable academic resource catalog with structured metadata.</li>
          <li>Professional public pages for institutional communication.</li>
          <li>Secure, credentials-based access for internal dashboards.</li>
          <li>Immediate deployability for MVP demonstrations.</li>
        </ul>
      </section>
    </div>
  );
}
