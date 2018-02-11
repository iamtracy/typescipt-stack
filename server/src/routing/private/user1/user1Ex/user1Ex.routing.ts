import { Router, Request, Response } from 'express';
import { Mongoose, Schema, SchemaTypes } from 'mongoose';

class User1Ex {
  public routes: Router = Router();
  constructor() {
    this.setRoutes();
  }
  private setRoutes() {
    this.routes
        .route('/')
        .get((req: Request, res: Response) => {
          res.json(`user1ex get ${req.body.password}`);
        })
        .post((req: Request, res: Response) => {
          res.json(`user1ex post ${req.body.password}`);
        })
        .put((req: Request, res: Response) => {
          res.json(`user1ex put ${req.body.password}`);
        });
  }
}

export default new User1Ex().routes;