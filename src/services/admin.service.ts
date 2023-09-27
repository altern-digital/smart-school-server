import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function login(username: string, password: string) {
    var admin = prisma.admin.findFirst({
        where: {
            username: username,
            password: password
        }
    })
    return admin
}

async function get() {
    var admins = await prisma.admin.findMany()
    return admins
}

async function getOne(id: number) {
    return await prisma.admin.findUnique({
        where: {
            id: id
        },
    })
}

async function create(data: any) {
    return await prisma.admin.create({
        data: data
    })
}

async function update(id: number, data: any) {
    return await prisma.admin.update({
        where: {
            id: id
        },
        data: data
    })
}

async function remove(id: number) {
    return await prisma.admin.delete({
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
    remove,
    login
}