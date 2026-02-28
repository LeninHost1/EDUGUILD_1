import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="p-6">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Name</p>
            <p className="text-base font-medium text-gray-900">{user.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Email</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">College</p>
            <p>{user.college}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Department</p>
            <p>{user.department || "Not specified"}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Academic Year</p>
            <p>{user.academicYear}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
