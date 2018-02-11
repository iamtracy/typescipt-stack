import * as express from 'express';
import * as mongoose from 'mongoose';
import { DataBase } from './../../db.access';
import { Router, Request, Response } from 'express';
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const router: Router = Router();

// In this case it's /auth
router.post('/', function (req, res, next) {
    res.json(`${req.body.password}`)
});

export const RouteController: Router = router;