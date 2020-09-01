import { Router } from 'express';
import  controllerCategoria from '../controller/controllerCategoria';
import jwt from '../middlewares/token';
class RouterCategoria {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerCategoria.listAll);
        this.router.get('/:id', controllerCategoria.listOne);
        this.router.post('/', controllerCategoria.create);
        this.router.put('/:id', controllerCategoria.update);
        this.router.put('/put/:id', controllerCategoria.delete);
    }
}
const routerCategoria =  new RouterCategoria();
export default routerCategoria.router;