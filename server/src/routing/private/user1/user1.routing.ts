import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const User1Routes: Router = Router();

User1Routes.route('/')
  .get((req: Request, res: Response) => {
    res.json(`user1 get ${req.body.password}`);
  })
  .post((req: Request, res: Response) => {
    res.json(`user1 post ${req.body.password}`);
  })
  .put((req: Request, res: Response) => {
    res.json(`user1 put ${req.body.password}`);
  });

export default User1Routes;