import { MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';
import environment from './env.config';

export default class DataBase {

    private dbUrl: string = `mongodb://${environment.api}:27017/localDb`;
    public dbConnection: MongoClient;

    public connect(): void {
        if (this.dbConnection === null) {
            MongoClient.connect(
                this.dbUrl, 
                (err, db: MongoClient) => this.connectionStatus(err, db)
            );
        }
    }

    private connectionStatus(err: Error, db: MongoClient): void {
        if(err) {
            throw new Error(`Conection to database failed`);
        } else {
            this.dbConnection = db;
        }
    }

}