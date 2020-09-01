import { Router } from 'express';
import  controllerEfectivo from '../controller/controllerEfectivo';
class RouterEfectivo {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerEfectivo.create);
    }
}
const routerEfectivo =  new RouterEfectivo();
export default routerEfectivo.router;