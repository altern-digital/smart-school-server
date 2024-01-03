import prisma from "../../../../features/prisma";
import { log } from 'console';

export async function getFees() {
    const fees = await prisma.student_fee.findMany();

    return fees;
}

export async function getFee(id: number) {
    const fee = await prisma.student_fee.findUnique({
        where: {
            id: id,
        },
        include: {
            payments: true,
        }
    });

    return fee;
}

export async function getFeePayments(id: number) {
    const payments = await prisma.student_fee_payment.findMany({
        where: {
            fee_id: id,
        },
    });

    return payments;
}

export async function createFeePayment(id: number, amount: number, description: string, receipt: string) {

    console.log(id, amount, description, receipt);

    const payment = await prisma.student_fee_payment.create({
        data: {
            fee_id: id,
            amount: amount,
            description: description,
            receipt: receipt,
        },
    }).catch((e) => {
        log(e);
    });

    return payment;
}