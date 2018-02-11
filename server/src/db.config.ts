import * as MongoClient from 'mongodb';
import * as mongoose from 'mongoose';

export class DataBase {

    private dbUrl: string = 'mongodb://127.0.0.1:27017/localDb';
    public dbConnection: any;

    public connect() {
        if (this.dbConnection == null) {
            MongoClient.connect(this.dbUrl, (err, db) => {
                console.log("Connected correctly to MongoDB server.");
                this.dbConnection = db;
            });
        }
    }

}