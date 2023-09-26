import { Request, Response, NextFunction } from 'express';

import * as teacherService from '../services/teacher.service';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const teachers = await teacherService.getTeachers();
    res.json(teachers);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const teacher = await teacherService.getTeacherById(parseInt(req.params.id));
    res.json(teacher);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const teacher = await teacherService.createTeacher(req.body);
    res.status(201).json(teacher);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const teacher = await teacherService.updateTeacher(
      parseInt(req.params.id),
      req.body
    );
    res.json(teacher);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await teacherService.deleteTeacher(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export { get, getById, create, update, remove };