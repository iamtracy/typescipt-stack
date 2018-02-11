import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const AuthRoutes: Router = Router();

AuthRoutes.all('/', function (req: Request, res: Response, next: NextFunction) {
    res.json(`${req.body.password}`)
});

export default AuthRoutes;