
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TypesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String
})

const TypesModel = mongoose.model('Types', TypesSchema, 'Types');
export default TypesModel;
