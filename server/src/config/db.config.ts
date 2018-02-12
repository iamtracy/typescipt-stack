import * as mongoose from 'mongoose';
import environment from './env.config';


export default class DataBase {

    public connect(): void {
        if (mongoose.connection.readyState == 0) {
            mongoose.connect(environment.databaseUrl);
        }
    }

}