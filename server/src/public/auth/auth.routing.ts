import * as express from 'express';
let authRoutes = express.Router();

authRoutes.post('/', (req, res, next) => {
    res.json(`${req.body.password}`);
});

export default authRoutes;