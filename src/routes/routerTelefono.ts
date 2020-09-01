import { Router } from 'express';
import  controllerTelefono from '../controller/controllerTelefono';
class RouterTelefono {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerTelefono.listAll);
        this.router.get('/:id', controllerTelefono.listOne);
        this.router.post('/', controllerTelefono.create);
        this.router.put('/:id', controllerTelefono.update);
        this.router.delete('/:id', controllerTelefono.delete);
    }
}
const routerTelefono =  new RouterTelefono();
export default routerTelefono.router;