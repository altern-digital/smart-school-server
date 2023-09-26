import { Request, Response, NextFunction } from 'express';

import * as studentService from '../services/student.service';
import * as teacherService from '../services/teacher.service';
import * as adminService from '../services/admin.service';

async function loginStudent(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    const user = await studentService.login(username, password)

    res.json(user);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function loginTeacher(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    const user = await teacherService.login(username, password)

    res.json(user);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function loginAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    const user = await adminService.login(username, password)

    res.json(user);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export { loginStudent, loginTeacher, loginAdmin };