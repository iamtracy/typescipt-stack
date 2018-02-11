import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PrivateRoutes: Router = Router();

PrivateRoutes.all('/', function (req: Request, res: Response, next: NextFunction) {
    console.log('private');
    res.json(`${req.body.password}`)
});

export default PrivateRoutes;