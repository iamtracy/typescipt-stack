import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as http from 'http';
import * as bodyParser from 'body-parser';

import DataBase from './db.config';
import Http from './http.config';

import PublicRoutes from './routing/public/public.routing';
import PrivateRoutes from './routing/private/private.routing';


class ExpressApp {

  public express: express.Application;
  private dataBase: DataBase;

  constructor(dataBase: DataBase) {
    this.express = express();
    this.express.use(Http);
    dataBase.connect();
    this.middleware();
    this.routes();
    this.watch();
  }

  private watch() {
    let server = http.createServer(this.express);
    server.listen(8080);
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.post('/public', PublicRoutes);
    this.express.all('*', (req: Request, res: Response, next: NextFunction) => {
      const isAuth: boolean = true;
      if(isAuth) {
        next();
      } else {
        res.status(401).send({ error: 'Not authorized' });
      }
    });
    this.express.use('/private', PrivateRoutes);
  }

}

export default new ExpressApp(new DataBase()).express;