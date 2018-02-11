import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

import User2Ex from './user2Ex/user2Ex.routing';
const User2Routes: Router = Router();

User2Routes.all('*', (req: Request, res: Response, next: NextFunction) => {
    User2Routes.use('/user1ex', User2Ex);
    next();
});

export default User2Routes;