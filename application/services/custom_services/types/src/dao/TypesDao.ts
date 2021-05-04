import * as mongoose from 'mongoose';
import TypesModel from '../models/Types';
import { CustomLogger } from '../config/Logger'


export class TypesDao {
    private Types = TypesModel;
    constructor() { }
public GpCreate(TypesData, callback){
new CustomLogger().showLogger('info', 'Enter into TypesDao.ts: GpCreate')
let temp = new TypesModel(TypesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TypesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}