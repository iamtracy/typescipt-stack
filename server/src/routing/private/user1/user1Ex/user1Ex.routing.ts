import { Router, Request, Response } from 'express';
import { Mongoose, Schema, SchemaTypes, Model } from 'mongoose';

class User1Ex {
  public routes: Router = Router();
  // private model: Model<any> = new Model();
  // private schema: Schema = new Schema();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('*')
        .get((req: Request, res: Response) => {
          res.json(`user1ex get ${req.body.password}`);
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