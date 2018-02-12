import * as mongoose from 'mongoose';
import environment from './env.config';


export default class DataBase {

    private dbUrl: string = `mongodb://${environment.api}:27017/localDb`;
    public dbConnection: mongoose.Connection;

    public connect(): void {
        if (this.dbConnection == null) {
            mongoose.connect(this.dbUrl);
        }
    }

}