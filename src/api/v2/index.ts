import Router from "@koa/router";

import class_rooms from "./features/class-rooms/api/router";
import classes from "./features/classes/api/router";
import class_schedules from "./features/class-schedules/api/router";
import class_subjects from "./features/class-subjects/api/router";

import teachers from "./features/teachers/api/router";

import students from "./features/students/api/router";
import student_attendances from "./features/student-attendances/api/router";
import student_attendance_requests from "./features/student-attendance-requests/api/router";
import student_fees from "./features/student-fees/api/router";
import student_fee_payments from "./features/student-fee-payments/api/router";
import student_points from "./features/student-points/api/router";
import student_point_types from "./features/student-point-types/api/router";

import parents from "./features/parents/api/router";

import calendar_events from "./features/calendar-events/api/router";
import faqs from "./features/faqs/api/router";
import feedbacks from "./features/feedbacks/api/router";

import uploads from "./features/uploads/api/router";

const router = new Router();

router.use("/class-rooms", class_rooms.routes());
router.use("/classes", classes.routes());
router.use("/class-schedules", class_schedules.routes());
router.use("/class-subjects", class_subjects.routes());

router.use("/teachers", teachers.routes());

router.use("/students", students.routes());
router.use("/student-attendances", student_attendances.routes());
router.use("/student-attendance-requests", student_attendance_requests.routes());
router.use("/student-fees", student_fees.routes());
router.use("/student-fee-payments", student_fee_payments.routes());
router.use("/student-points", student_points.routes());
router.use("/student-point-types", student_point_types.routes());

router.use("/parents", parents.routes());

router.use("/calendar-events", calendar_events.routes());
router.use("/faqs", faqs.routes());
router.use("/feedbacks", feedbacks.routes());

router.use("/uploads", uploads.routes());

export default router;
