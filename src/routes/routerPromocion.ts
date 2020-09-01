import { Router } from 'express';
import  controllerPromo from '../controller/controllerPromo';
class RouterPromo {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerPromo.listAll);
        this.router.get('/:id', controllerPromo.listOne);
        this.router.post('/', controllerPromo.create);
        this.router.put('/:id', controllerPromo.update);
        this.router.put('/put/:id', controllerPromo.delete);
    }
}
const routerPromo =  new RouterPromo();
export default routerPromo.router;