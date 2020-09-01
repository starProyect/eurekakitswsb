import { Router } from 'express';
import  controllerDireccion from '../controller/controllerDireccion';
class RouterDireccion {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerDireccion.listAll);
        this.router.get('/:id', controllerDireccion.listOne);
        this.router.post('/', controllerDireccion.create);
        this.router.put('/:id', controllerDireccion.update);
        this.router.delete('/:id', controllerDireccion.delete);
    }
}
const routerDireccion =  new RouterDireccion();
export default routerDireccion.router;