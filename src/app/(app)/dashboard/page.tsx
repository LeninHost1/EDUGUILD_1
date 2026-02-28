import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlusCircle } from "lucide-react";

async function getDashboardData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  const userResources = await prisma.resource.findMany({
    where: { createdById: userId },
    orderBy: { createdAt: "desc" },
    take: 5
  });

  const userResourceCount = await prisma.resource.count({
    where: { createdById: userId }
  });

  const totalResources = await prisma.resource.count();

  return { user, userResources, userResourceCount, totalResources };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const { user, userResources, userResourceCount, totalResources } = await getDashboardData(session.user.id);

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="space-y-6 p-6">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-gray-900">Welcome back, {user.name}.</h1>
        <p className="mt-2 text-sm text-gray-600">
          {user.college} {user.department ? `- ${user.department}` : ""} - {user.academicYear}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Your Resources</CardTitle>
            <CardDescription>Materials you have shared</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userResourceCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Campus Library</CardTitle>
            <CardDescription>Total resources available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalResources}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            <CardDescription>Keep your library current</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button asChild className="justify-start">
              <Link href="/dashboard/add-resource">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add a resource
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/dashboard/resources">
                <BookOpen className="mr-2 h-4 w-4" />
                View resources
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Contributions</CardTitle>
          <CardDescription>Your latest academic resources</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {userResources.length === 0 ? (
            <p className="text-sm text-gray-600">No resources added yet. Share your first resource today.</p>
          ) : (
            userResources.map((resource) => (
              <div key={resource.id} className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                  <p className="text-xs text-gray-500">{resource.department} - {resource.academicYear}</p>
                </div>
                <Button variant="link" asChild>
                  <Link href={{ pathname: "/dashboard/resources", query: { id: resource.id } }}>
                    View
                  </Link>
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
