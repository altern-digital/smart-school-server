import prisma from "../../features/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      role: {
        select: {
          name: true,
        },
      },
    },
  });

  return users;
}

export async function getUser(userId: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      role: {
        select: {
          name: true,
        },
      },
    },
  });

  return user;
}

export async function getProfile(userId: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      role: {
        select: {
          name: true,
        },
      },
    },
  });

  var profile;

  switch (user?.role.name) {
    case "student":
      profile = await prisma.student.findUnique({
        where: {
          userId: userId,
        },
        include: {
          strikes: {
            include: {
              students: true,
              teacher: true,
            },
          },
          classroom: true,
        },
      });
      break;
    case "teacher":
      profile = await prisma.teacher.findUnique({
        where: {
          userId: userId,
        },
        include: {
          studentStrikes: {
            include: {
              students: true,
              teacher: true,
            },
          },
          classroom: true,
        },
      });
      break;
    default:
      profile = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      break;
  }

  return profile;
}
