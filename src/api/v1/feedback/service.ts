import prisma from "../../../features/prisma";

export async function createFeedback(description: string, snapshot: string) {

    const appFeedback = await prisma.app_feedback.create({
        data: {
            description: description,
            snapshot: snapshot,
        },
    });

    return appFeedback;
}