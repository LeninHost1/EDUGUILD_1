import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Connect with the EDUGUILD team.</h1>
        <p className="text-base text-slate-600">
          We support institutions evaluating new academic resource systems. Share your requirements and timeline.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-200 bg-white/90">
          <CardHeader>
            <CardTitle className="text-base">Request information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Full Name</Label>
                <Input id="contact-name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="name@institution.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-role">Role</Label>
                <Input id="contact-role" placeholder="Department head, faculty, administrator" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Tell us about your academic resource goals." rows={5} />
              </div>
              <Button type="button">Submit inquiry</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-base">Institutional support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <p>Academic partnerships: partnerships@eduguild.edu</p>
            <p>Technical onboarding: onboarding@eduguild.edu</p>
            <p>Phone: +1 (555) 013-4500</p>
            <p>Office hours: Monday to Friday, 9:00 AM to 5:00 PM (local)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
