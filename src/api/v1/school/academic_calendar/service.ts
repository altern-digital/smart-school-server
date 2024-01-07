import prisma from "../../../../services/database";

export async function getAcademicCalendars() {
    const academic_calendars = await prisma.calendar_event.findMany();
    return academic_calendars;
}