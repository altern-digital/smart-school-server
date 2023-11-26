import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  var students = await prisma.student.findMany({
    include: {
      strikes: true,
    },
  });

  for (var student of students) {
    var updatedStudent = await prisma.student.findUnique({
      where: {
        id: student.id,
      },
      include: {
        strikes: true,
      },
    });

    var totalStrikes = updatedStudent.strikes.reduce(
      (acc, strike) => acc + strike.amount,
      0
    );

    await prisma.student.update({
      where: {
        id: student.id,
      },
      data: {
        points: totalStrikes,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
