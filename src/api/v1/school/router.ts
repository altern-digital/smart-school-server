import Router from "@koa/router";
import faq from "./faq/router";
import academicCalendar from "./academic_calendar/router";
import prisma from "../../../services/database";

const router = new Router();

router.use("/faqs", faq.routes());
router.use("/academic-calendars", academicCalendar.routes());
router.get("/point-types", async (context) => {
    var strikeTypes = await prisma.student_point_type.findMany();

    context.body = {
        data: strikeTypes,
    };
});


export default router;