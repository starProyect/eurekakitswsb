import { Router } from 'express';
import  controllerPaypalBuy from '../controller/controllerPaypalBuy';
class RouterPaypal {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerPaypalBuy.create);
        this.router.get('/success', controllerPaypalBuy.success);
        this.router.get('/cancel', controllerPaypalBuy.cancel);
    }
}
const routerPaypal =  new RouterPaypal();
export default routerPaypal.router;