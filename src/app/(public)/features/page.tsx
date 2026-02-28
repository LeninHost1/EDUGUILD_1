import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Structured resource intake",
    description: "Capture title, description, college, department, and academic year for consistent indexing."
  },
  {
    title: "External link hosting",
    description: "Store cloud links only, ensuring institutional storage policies remain intact."
  },
  {
    title: "Embedded resource viewer",
    description: "Preview links inside the dashboard without leaving the platform."
  },
  {
    title: "Institutional presentation",
    description: "Public pages that align with formal academic communication standards."
  },
  {
    title: "Protected access",
    description: "Credential-based sign in with clear session protection for dashboards."
  },
  {
    title: "Responsive layouts",
    description: "Optimized for desktop and mobile usage in busy academic environments."
  }
];

export default function FeaturesPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Features</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Everything required for a dependable academic MVP.
        </h1>
        <p className="text-base text-slate-600">
          EDUGUILD prioritizes stability and clarity to support rapid deployment and confident demonstrations.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-base">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">{feature.description}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
