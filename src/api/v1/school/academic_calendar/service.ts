import prisma from "../../../../features/prisma";

export async function getAcademicCalendars() {
    const academic_calendars = await prisma.calendar_event.findMany();
    return academic_calendars;
}