import { PrismaClient } from '@prisma/client'
import * as xlsx from 'xlsx'
import * as fs from 'fs'

const prisma = new PrismaClient()

const workbook = xlsx.readFile('db.xlsx')

const workSheet = workbook.Sheets["Teachers"]

const data = xlsx.utils.sheet_to_json(workSheet)

async function main() {
    for (var item of data) {
        var itemData = item as any;

        var user = await prisma.user.create({
            data: {
                identifier: itemData.identifier,
                password: itemData.password,
                roleId: 2,
            },
        });

        var teacher = await prisma.teacher.update({
            where: {
                id: itemData.id,
            },
            data: {
                userId: user.id,
            },
        });

        console.log(itemData.identifier + " Updated");
    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })