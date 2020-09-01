import { Router } from 'express';
import  controllerCateProdu from '../controller/controllerCateProdu';
class RouterCateProdu {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id', controllerCateProdu.listOne);
    }
}
const routerCateProdu =  new RouterCateProdu();
export default routerCateProdu.router;