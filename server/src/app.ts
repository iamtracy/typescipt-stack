import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import authRoutes from './public/auth/auth.routing';
const cors = require('cors');
const corsOptions = {
  preflightContinue: true,
  origin: 'http://localhost:4200',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
};

class ExpressApp {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.express.use(cors(corsOptions));
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
    let router = express.Router();
    this.express.use('/', router);
    router.use('/auth', authRoutes);
  }

 
}

export default new ExpressApp().express;