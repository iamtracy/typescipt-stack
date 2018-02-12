import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;

const User = new Schema({
   name:String,
   email:String,
   password:String,
   userRole: Number
});

export default mongoose.model('Users', User); 