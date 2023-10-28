import { Request, Response } from "express";

import * as leaderboardService from "./leaderboard.service";

export async function getStudentLeaderboard(req: Request, res: Response) {
    const classroomName = req.params.classroomName;
    const students = await leaderboardService.getStudentLeaderboard(classroomName);

    res.json({ "data": students });
}