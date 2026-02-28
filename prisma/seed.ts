import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 12);

  const user = await prisma.user.upsert({
    where: { email: "student@eduguild.edu" },
    update: {},
    create: {
      name: "Jordan Lee",
      email: "student@eduguild.edu",
      passwordHash,
      college: "Evergreen University",
      department: "Computer Science",
      academicYear: "Third Year"
    }
  });

  await prisma.resource.upsert({
    where: { id: "resource-sample" },
    update: {},
    create: {
      id: "resource-sample",
      title: "Data Structures Study Guide",
      description: "Concise guide covering linked lists, trees, graphs, and complexity analysis.",
      externalLink: "https://example.com/data-structures-guide.pdf",
      college: "Evergreen University",
      department: "Computer Science",
      academicYear: "Third Year",
      createdById: user.id
    }
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
