import { Prisma } from "@prisma/client";
import prisma from "../../../../services/database";
import { DefaultArgs } from "@prisma/client/runtime/library";

export async function getStudents(query: Prisma.studentFindManyArgs<DefaultArgs>) {
    const students = await prisma.student.findMany(query);

    return students;
}

export async function getStudent(query: Prisma.studentFindUniqueArgs<DefaultArgs>) {
    const student = await prisma.student.findUnique(query);

    return student;
}