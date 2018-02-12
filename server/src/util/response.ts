import { NextFunction } from 'express';

const postReponse = (err: any, res: any, data: any, next: NextFunction) => {
    if (err) return next(err);  
    res.json(res);
}

const getResponse = (err: any, res: any, data: any, next: NextFunction) => {
    if (err) return next(err);  
    res.json(data);
}



export {postReponse, getResponse};