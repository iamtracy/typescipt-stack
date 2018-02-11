import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as APP_ROUTES from './public/auth/auth.routing';
import { DataBase } from './db.access';

const cors = require('cors');
const corsOptions = {
  preflightContinue: true,
  origin: 'http://localhost:4200',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
};

class ExpressApp {

  public express: express.Application;
  private dataBase: DataBase;

  constructor(dataBase: DataBase) {
    this.express = express();
    this.express.use(cors(corsOptions));
    this.dataBase = dataBase;
    this.middleware();
    this.routes();
    this.connect();
    this.watch();
  }

  private connect() {
    this.dataBase.connect();
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
    this.express.all('/auth', (req, res, next) => {
      const isAuth: boolean = true;
      isAuth 
      ? next()
      : res.status(401).send({ error: 'Not authorized' });
    });
    this.express.use('/auth', APP_ROUTES.RouteController);
  }
 
}

export default new ExpressApp(new DataBase()).express;