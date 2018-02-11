import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PublicRoutes: Router = Router();

import RegistrationRoutes from './registration/registration.routing';

PublicRoutes.all('/', (req: Request, res: Response, next: NextFunction) => {
    PublicRoutes.all('registration', RegistrationRoutes);
    next();
});

export default PublicRoutes;