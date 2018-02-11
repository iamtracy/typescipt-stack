import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const User2Routes: Router = Router();


User2Routes.route('/')
  .get((req: Request, res: Response) => {
    res.json(`user2 get ${req.body.password}`);
  })
  .post((req: Request, res: Response) => {
    res.json(`user2 post ${req.body.password}`);
  })
  .put((req: Request, res: Response) => {
    res.json(`user2 put ${req.body.password}`);
  });

export default User2Routes;