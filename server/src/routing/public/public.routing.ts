import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

import Registration from './registration/registration.routing';
const PublicRoutes: Router = Router();

PublicRoutes.all('*', (req: Request, res: Response, next: NextFunction) => {
    PublicRoutes.use('/registration', Registration);
    next();
});

export default PublicRoutes;