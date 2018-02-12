import { Router, Request, Response, NextFunction } from 'express';
import { Mongoose, Schema, SchemaTypes, Model } from 'mongoose';
import * as mongoose from 'mongoose';

import { getResponse } from './../../../../util/response'

class User1Ex {
  public routes: Router = Router();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('*')
        .get((req: Request, res: Response, next: NextFunction) => {
          mongoose.model('Users').find({}, (err, data) => getResponse(err, res, data, next));
        })
        .post((req: Request, res: Response) => {
          res.json(`user1ex post ${req.body.password}`);
        })
        .patch((req: Request, res: Response) => {
          res.json(`user1ex patch ${req.body.password}`);
        });
  }
}

export default new User1Ex().routes;