import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

async function createResource(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login");
  }

  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const externalLink = String(formData.get("externalLink") || "").trim();
  const college = String(formData.get("college") || "").trim();
  const department = String(formData.get("department") || "").trim();
  const academicYear = String(formData.get("academicYear") || "").trim();

  if (!title || !description || !externalLink || !college || !department || !academicYear) {
    throw new Error("Missing required fields");
  }

  await prisma.resource.create({
    data: {
      title,
      description,
      externalLink,
      college,
      department,
      academicYear,
      createdById: session.user.id
    }
  });

  revalidatePath("/dashboard/resources");
  redirect("/dashboard/resources");
}

export default async function AddResourcePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Add Resource</h1>
        <p className="text-sm text-gray-600">Submit an external link for your academic community.</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Resource details</CardTitle>
          <CardDescription>No file uploads. Use a cloud-hosted link.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createResource} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Resource title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Short summary" rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="externalLink">External Link</Label>
              <Input id="externalLink" name="externalLink" type="url" placeholder="https://" required />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="college">College</Label>
              <Input
                id="college"
                name="college"
                placeholder="College or university"
                defaultValue={user?.college || ""}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                name="department"
                placeholder="Department or program"
                defaultValue={user?.department || ""}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="academicYear">Academic Year</Label>
            <Input
              id="academicYear"
              name="academicYear"
              placeholder="First Year, Second Year, Graduate"
              defaultValue={user?.academicYear || ""}
              required
            />
          </div>
            <Button type="submit">Publish resource</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
