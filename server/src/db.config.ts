import { MongoClient } from 'mongodb';
import * as mongoose from 'mongoose';

export default class DataBase {

    private dbUrl: string = 'mongodb://127.0.0.1:27017/localDb';
    public dbConnection: MongoClient;

    public connect(): void {
        if (this.dbConnection === null) {
            MongoClient.connect(this.dbUrl, (err, db: MongoClient) => this.createConnection(err, db));
        }
    }

    private createConnection(err: Error, db: MongoClient): void {
        if(err) {
            throw new Error(`Conection to database failed`);
        } else {
            this.dbConnection = db;
        }
    }

}