import { Router } from 'express';
import controllerDetalleVenta  from '../controller/controllerDetalleVenta';
import jwt from '../middlewares/token';
class RouterDetalleVenta {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',jwt.verifyToken, controllerDetalleVenta.listAll);
        this.router.post('/',jwt.verifyToken, controllerDetalleVenta.create);
        this.router.delete('/:id', controllerDetalleVenta.delete);
    }
}
const routerDetalleVenta =  new RouterDetalleVenta();
export default routerDetalleVenta.router;