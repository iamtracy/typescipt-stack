import { Router, Request, Response, NextFunction } from 'express';
import { Document, Schema, Model, model } from "mongoose";
import { ObjectID } from "mongodb";
import * as mongoose from "mongoose";

import User from './../../../models/user.model';
import { postReponse, getResponse } from './../../../util/response';

          
class Registration {
  public routes: Router = Router();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('*')
        .post((req: Request, res: Response, next: NextFunction) => {
            new User({...req.body}).save((err, user) => postReponse(err, res, user, next));
        });
  }
  
}



export default new Registration().routes;