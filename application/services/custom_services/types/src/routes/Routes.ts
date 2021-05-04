import { Request, Response, NextFunction } from "express";
import { TypesController } from '../controller/TypesController';


export class Routes {
    private Types: TypesController = new TypesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Types').post(this.Types.GpCreate);
     }

}