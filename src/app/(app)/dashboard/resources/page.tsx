import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ResourcesClient } from "@/app/(app)/dashboard/resources/resources-client";

export default async function ResourcesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const resources = await prisma.resource.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      description: true,
      externalLink: true,
      college: true,
      department: true,
      academicYear: true
    }
  });

  return <ResourcesClient resources={resources} />;
}
