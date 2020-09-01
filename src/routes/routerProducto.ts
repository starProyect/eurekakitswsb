import { Router } from 'express';
import  controllerProducto from '../controller/controllerProducto';
class RouterProducto {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerProducto.listAll);
        this.router.get('/:id', controllerProducto.listOne);
        this.router.post('/', controllerProducto.create);
        this.router.put('/:id', controllerProducto.update);
        this.router.put('/stock/:id', controllerProducto.updateStock);
        this.router.put('/put/:id', controllerProducto.delete);
    }
}
const routerProducto =  new RouterProducto();
export default routerProducto.router;