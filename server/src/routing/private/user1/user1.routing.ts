import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

import User1Ex from './user1Ex/user1Ex.routing';
const User1Routes: Router = Router();

User1Routes.all('*', (req: Request, res: Response, next: NextFunction) => {
    User1Routes.use('/user1ex', User1Ex);
    next();
});

export default User1Routes;