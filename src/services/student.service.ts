import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function get() {
    return await prisma.student.findMany()
}

async function getOne(id: number) {
    return await prisma.student.findUnique({
        where: {
            id: id
        }
    })
}

async function create(data: any) {
    return await prisma.student.create({
        data: data
    })
}

async function update(id: number, data: any) {
    return await prisma.student.update({
        where: {
            id: id
        },
        data: data
    })
}

async function remove(id: number) {
    return await prisma.student.delete({
        where: {
            id: id
        }
    })
}

export default {
    get,
    getOne,
    create,
    update,
    remove
}