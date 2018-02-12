import { Router, Request, Response, NextFunction } from 'express';
import { Document, Schema, Model, model } from "mongoose";
import * as mongoose from "mongoose";

import User from './user.model';
          
class Registration {
  public routes: Router = Router();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('*')
        .get((req: Request, res: Response, next: NextFunction) => {
            res.json(`Registration get ${req.body.password}`);
        })
        .post((req: Request, res: Response, next: NextFunction) => {

            new User({
              password : req.body.password,
              email : req.body.email,
              userRole: 2
            })
            .save((err, user) => {
                if (err) {
                  return next(err);
                }
              res.json(user);
            });

        })
        .patch((req: Request, res: Response, next: NextFunction) => {
          res.json(`Registration patch ${req.body.password}`);
        });

  }
  
}



export default new Registration().routes;