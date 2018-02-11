import { User } from './../../../../../app.d';
import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

class Registration {
  public routes: Router = Router();
  private user: User;
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('/')
        .get((req: Request, res: Response) => {
          this.user = req.body;
          res.json(`Registration get ${req.body.password}`);
        })
        .post((req: Request, res: Response) => {
          this.user = req.body;
          res.json(`Registration post ${req.body.password}`);
        })
        .put((req: Request, res: Response) => {
          this.user = req.body;
          res.json(`Registration put ${req.body.password}`);
        });
  }
}



export default new Registration().routes;