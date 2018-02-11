import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

class User2Ex {
  public routes: Router = Router();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('/')
        .get((req: Request, res: Response) => {
          res.json(`user2ex get ${req.body.password}`);
        })
        .post((req: Request, res: Response) => {
          res.json(`user2ex post ${req.body.password}`);
        })
        .put((req: Request, res: Response) => {
          res.json(`user2ex put ${req.body.password}`);
        });
  }
}

export default new User2Ex().routes;