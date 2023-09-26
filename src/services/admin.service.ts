import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function login(username: string, password: string) {
  const user = await prisma.admin.findFirst({
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

async function getAdminById(id: number) {
  const admin = await prisma.admin.findUnique({
    where: {
      id
    }
  })
  if (!admin) {
    throw new Error('Admin not found')
  }
  return admin
}

async function getAdmins() {
  return await prisma.admin.findMany()
}

async function createAdmin(data: any) {
  return await prisma.admin.create({
    data
  })
}

async function updateAdmin(id: number, data: any) {
  return await prisma.admin.update({
    where: {
      id
    },
    data
  })
}

async function deleteAdmin(id: number) {
  return await prisma.admin.delete({
    where: {
      id
    }
  })
}

async function sendTeacherStrike(adminId: number, teacherId: number, data: any) {
  const strike = await prisma.teacherStrike.create({
    data: {
      ...data,
      admin: {
        connect: {
          id: adminId
        }
      },
      teachers: {
        connect: {
          id: teacherId
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
  getAdminById,
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  sendTeacherStrike
}