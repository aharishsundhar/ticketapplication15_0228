import { Request, Response } from 'express';
import {TypesDao} from '../dao/TypesDao';
import { CustomLogger } from '../config/Logger'
let Types = new TypesDao();

export class TypesService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TypesService.ts: GpCreate')
     const  TypesData = req.body;
     Types.GpCreate(TypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TypesService.ts: GpCreate')
         callback(response);
         });
    }


}