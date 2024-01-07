import prisma from "../../../../services/database";

export async function getFaqs() {
    const faqs = await prisma.faq.findMany();
    return faqs;
}