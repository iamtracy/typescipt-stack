import * as express from 'express';
import * as mongoose from 'mongoose';
import { Router, Request, Response } from 'express';
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PublicRoutes: Router = Router();

PublicRoutes.all('/', function (req, res, next) {
    res.json(`${req.body.password}`)
});

export default PublicRoutes;