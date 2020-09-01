import { Router } from 'express';
import  controllerTrasferenciaBancaria from '../controller/controllerTrasferenciaBancaria';
class RouterTrasferenciaBancaria {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerTrasferenciaBancaria.create);
    }
}
const routerTrasferenciaBancaria =  new RouterTrasferenciaBancaria();
export default routerTrasferenciaBancaria.router;