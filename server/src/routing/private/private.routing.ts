import { Router, Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;
const PrivateRoutes: Router = Router();

import User1Routes from './user1/user1.routing';
import User2Routes from './user2/user2.routing';

PrivateRoutes.all('*', (req: Request, res: Response, next: NextFunction) => {
    const user: { userTypeId: 1 | 2 } = { userTypeId: 1 };
    next();
    switch(user.userTypeId) { 
        case 1: {
            PrivateRoutes.use('/user1', User1Routes);
            break; 
        }
        case 2: {
            PrivateRoutes.use('/user2', User2Routes);
            break; 
        }
        default: { 
            res.status(401).send({ error: 'Unauthorized user type' });
            break; 
        }
    } 
});

export default PrivateRoutes;