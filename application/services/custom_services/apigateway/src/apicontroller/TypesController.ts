import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class TypesController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/Types', this.GpCreate);
    }

public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into TypesController.ts: GpCreate');
        new ApiAdaptar().post(Constant.TYPESURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from TypesController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
