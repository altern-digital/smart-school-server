import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function login(username: string, password: string) {
  const user = await prisma.teacher.findFirst({
    where: {
      username,
      password
    }
  })
  if (!user) {
    throw new Error('Username or password is incorrect')
  }
  return user
}

async function getTeacherById(id: number) {
  const teacher = await prisma.teacher.findUnique({
    where: {
      id
    }
  })
  if (!teacher) {
    throw new Error('Teacher not found')
  }
  return teacher
}

async function getTeachers() {
  return await prisma.teacher.findMany()
}

async function createTeacher(data: any) {
  return await prisma.teacher.create({
    data
  })
}

async function updateTeacher(id: number, data: any) {
  return await prisma.teacher.update({
    where: {
      id
    },
    data
  })
}

async function deleteTeacher(id: number) {
  return await prisma.teacher.delete({
    where: {
      id
    }
  })
}

async function sendStudentStrike(teacherId: number, studentId: number, data: any) {
  const strike = await prisma.teacherStrike.create({
    data: {
      ...data,
      teacher: {
        connect: {
          id: teacherId
        }
      },
      student: {
        connect: {
          id: studentId
        }
      }
    }
  });
  if (!strike) {
    throw new Error('Cannot send strike')
  }
  return strike
}

export {
  login,
  getTeacherById,
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  sendStudentStrike
}