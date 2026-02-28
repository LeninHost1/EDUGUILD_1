import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Academic Resource Platform
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            A unified portal for university-wide resource sharing and collaboration.
          </h1>
          <p className="text-lg text-slate-600">
            EDUGUILD centralizes academic materials, departmental updates, and cross-campus knowledge in a single,
            secure workspace for students and faculty.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/auth/signup">Request access</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/features">Explore features</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900">Campus-ready in days</h2>
          <p className="mt-3 text-sm text-slate-600">
            Launch with formal onboarding, institutional branding, and clear governance controls.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Resource library</p>
              <p className="text-xs text-slate-500">Verified cloud links, organized by department and year.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Academic continuity</p>
              <p className="text-xs text-slate-500">Keep syllabi, notes, and guides accessible year-round.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Secure access</p>
              <p className="text-xs text-slate-500">Credentials-based sign-in with institutional oversight.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Institution-ready governance",
            body: "Set clear policies for contribution, verification, and departmental oversight."
          },
          {
            title: "Cross-campus collaboration",
            body: "Support student, faculty, and committee initiatives in one shared platform."
          },
          {
            title: "Continuous academic access",
            body: "Ensure every cohort has reliable access to essential learning materials."
          }
        ].map((item) => (
          <Card key={item.title} className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">{item.body}</CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Designed for formal academic environments.</h2>
            <p className="mt-3 text-sm text-slate-600">
              EDUGUILD aligns with institutional expectations by providing structured navigation, faculty-friendly workflows,
              and a professional presentation for public-facing pages.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Centralized resource intake with metadata for college, department, and academic year.</li>
            <li>Public pages that reflect your institution�s tone and messaging.</li>
            <li>Dashboard experiences optimized for quick review and action.</li>
            <li>Embedded viewing for cloud-hosted files with no local uploads required.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 p-10 text-white shadow-lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready to launch EDUGUILD for your campus?</h2>
            <p className="mt-2 text-sm text-slate-200">
              Build a dependable academic resource portal that students can trust.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="text-slate-900">
            <Link href="/auth/signup">Start the MVP</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
