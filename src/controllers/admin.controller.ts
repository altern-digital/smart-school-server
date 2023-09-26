import { Request, Response, NextFunction } from 'express';

import * as adminService from '../services/admin.service';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const admins = await adminService.getAdmins();
    res.json(admins);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const admin = await adminService.getAdminById(parseInt(req.params.id));
    res.json(admin);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const admin = await adminService.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const admin = await adminService.updateAdmin(
      parseInt(req.params.id),
      req.body
    );
    res.json(admin);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await adminService.deleteAdmin(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

async function sendTeacherStrike(req: Request, res: Response, next: NextFunction) {
  try {
    const strike = await adminService.sendTeacherStrike(
      parseInt(req.params.id),
      parseInt((req.query as any).teacherId),
      req.body
    );
    res.status(201).json(strike);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}

export { get, getById, create, update, remove, sendTeacherStrike };