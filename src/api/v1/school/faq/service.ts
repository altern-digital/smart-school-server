import prisma from "../../../../features/prisma";

export async function getFaqs() {
    const faqs = await prisma.faq.findMany();
    return faqs;
}