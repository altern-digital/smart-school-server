import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function login(username: string, password: string) {
  const user = await prisma.student.findFirst({
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

async function getStudentById(id: number) {
  const student = await prisma.student.findUnique({
    where: {
      id
    }
  })
  if (!student) {
    throw new Error('Student not found')
  }
  return student
}

async function getStudents() {
  const students = await prisma.student.findMany();
  if (!students) {
    throw new Error('Student not found')
  }
  return students
}

async function createStudent(data: any) {
  try {
    return await prisma.student.create({
      data
    })
  } catch (err: any) {
    throw new Error("Failed to create student")
  }

}

async function updateStudent(id: number, data: any) {
  const student = await prisma.student.update({
    where: {
      id
    },
    data
  });
  if (!student) {
    throw new Error('Student not found')
  }
  return student
}

async function deleteStudent(id: number) {
  const student = await prisma.student.delete({
    where: {
      id
    }
  });
  if (!student) {
    throw new Error('Student not found')
  }
  return student
}

export {
  login,
  getStudentById,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
}