import prisma from "../../../services/database";


export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      roles: {
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
      roles: {
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
      type: true,
    },
  });

  var profile;

  switch (user.type) {
    case "student":
      profile = await prisma.student.findUnique({
        where: {
          user_id: userId,
        },
        include: {
          strikes: {
            include: {
              students: true,
              teacher: true,
            },
          },
          class: true,
        },
      });
      break;
    case "teacher":
      profile = await prisma.teacher.findUnique({
        where: {
          user_id: userId,
        },
        include: {
          strikes: {
            include: {
              students: true,
              teacher: true,
            },
          },
        },
      });
    case "parent":
      profile = await prisma.parent.findUnique({
        where: {
          user_id: userId,
        },
        include: {
          student: true,
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
