import prisma from "../../../features/prisma";

export async function getClassroms() {
    const classes = await prisma.class.findMany();
    return classes;
}

export async function getclass(id: number) {
    const class_ = await prisma.class.findUnique({
        where: {
            id: id,
        },
        include: {
            students: true,
        },
    });

    return class_;
}

export async function getclassSchedules(id: number) {
    const schedules = await prisma.class_schedule.findMany({
        where: {
            class_id: id,
        },
        include: {
            subject: true,
            room: true,
        }
    });

    return schedules;
}