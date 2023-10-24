import { Request, Response } from "express";

import * as leaderboardService from "../services/leaderboard";

async function getStudentLeaderboard(req: Request, res: Response) {
    const classroomName = req.params.classroomName;
    const students = await leaderboardService.getStudentLeaderboard(classroomName);

    res.json({ "data": students });
}

export { getStudentLeaderboard };