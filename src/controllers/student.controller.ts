import { Request, Response, NextFunction } from 'express';

import * as studentService from '../services/student.service';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const students = await studentService.getStudents();
    res.json(students);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const student = await studentService.getStudentById(parseInt(req.params.id));
    res.json(student);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const student = await studentService.updateStudent(
      parseInt(req.params.id),
      req.body
    );
    res.json(student);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await studentService.deleteStudent(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export { get, getById, create, update, remove };