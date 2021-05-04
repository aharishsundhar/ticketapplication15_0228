import { Request, Response } from 'express';
import { TypesService } from '../service/TypesService';
import { CustomLogger } from '../config/Logger'
let Types = new TypesService();

export class TypesController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
Types.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TypesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TypesController.ts: GpCreate');
    })}


}