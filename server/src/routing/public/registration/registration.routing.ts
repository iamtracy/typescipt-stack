import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const RegistrationRoutes: Router = Router();

RegistrationRoutes.route('/')
  .get((req: Request, res: Response) => {
    res.json(`get ${req.body.password}`);
  })
  .post((req: Request, res: Response) => {
    res.json(`post ${req.body.password}`);
  })
  .put((req: Request, res: Response) => {
    res.json(`put ${req.body.password}`);
  });

export default RegistrationRoutes;