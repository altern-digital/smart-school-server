import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function login(username: string, password: string) {
    var teacher = prisma.teacher.findFirst({
        where: {
            username: username,
            password: password
        }
    })
    return teacher
}

async function get() {
    var teachers = await prisma.teacher.findMany()
    return teachers
}

async function getOne(id: number) {
    return await prisma.teacher.findUnique({
        where: {
            id: id
        },
    })
}

async function create(data: any) {
    return await prisma.teacher.create({
        data: data
    })
}

async function update(id: number, data: any) {
    return await prisma.teacher.update({
        where: {
            id: id
        },
        data: data
    })
}

async function remove(id: number) {
    return await prisma.teacher.delete({
        where: {
            id: id
        }
    })
}

async function sendStrike(teacherId: number, points: number, studentIds: number[]) {
    var teacher = await prisma.teacher.findUnique({
        where: {
            id: teacherId
        }
    })

    var students = await prisma.student.findMany({
        where: {
            id: {
                in: studentIds
            }
        }
    })

    var studentIds = students.map(student => student.id)

    var strikes = await prisma.studentStrike.create({
        data: {
            points: points,
            teacher: {
                connect: {
                    id: teacher.id
                }
            },
            students: {
                connect: studentIds.map(id => {
                    return {
                        id: id
                    }
                })
            }
        },
    })
    return strikes
}

export default {
    get,
    getOne,
    create,
    update,
    remove,
    login,
    sendStrike
}