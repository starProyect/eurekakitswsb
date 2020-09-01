import { Router } from 'express';
import  controllerPaypal from '../controller/controllerPaypal';
class RouterPaypal {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerPaypal.create);
    }
}
const routerPaypal =  new RouterPaypal();
export default routerPaypal.router;