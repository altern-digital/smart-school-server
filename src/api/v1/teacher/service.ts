import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import prisma from "../../../services/database";

export async function getTeacher(teacherId: number) {
  const teacher = await prisma.teacher.findUnique({
    where: {
      id: teacherId,
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

  if (!teacher) {
    throw new Error("Teacher not found");
  }

  return teacher;
}

export async function getTeachers(
  query: Prisma.teacherFindManyArgs<DefaultArgs> = {}
) {
  const teachers = await prisma.teacher.findMany(query);

  return teachers;
}

export async function sendStrikes(
  teacherId: number,
  amount: number,
  reason: string,
  description: string,
  students: any
) {
  const strike = await prisma.student_point.create({
    data: {
      reason,
      description,
      teacher_id: teacherId,
      amount: amount,
      students: {
        connect: students.map((student: any) => {
          return {
            id: student.id,
          };
        }),
      },
    },
  });

  await prisma.student.updateMany({
    where: {
      id: {
        in: students.map((student: any) => {
          return student.id;
        }),
      },
    },
    data: {
      points: {
        increment: amount,
      },
    },
  });

  return strike;
}

export async function getStrikes(teacherId: number) {
  const teacher = await prisma.teacher.findUnique({
    where: {
      id: teacherId,
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

  return teacher?.strikes;
}

export async function updateTeacher(teacherId: number, data: any = {}) {
  const teacher = await prisma.teacher.update({
    where: {
      id: teacherId,
    },
    data: {
      name: data.name || undefined,
    },
  });

  return teacher;
}

export async function createTeacher(userId: number, data: any = {}) {
  var teacher = await prisma.teacher.findUnique({
    where: {
      user_id: userId,
    },
  });

  if (!teacher) {
    teacher = await prisma.teacher.create({
      data: {
        user_id: userId,
      },
    });

    teacher = await updateTeacher(teacher.id, data);
  }

  return teacher;
}

export async function getSchedules(teacherId: number) {
  const schedules = await prisma.class_schedule.findMany({
    where: {
      subject: {
        teachers: {
          some: {
            id: teacherId,
          },
        },
      }
    }
  });

  return schedules;
}