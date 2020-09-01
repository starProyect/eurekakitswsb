import { Router } from 'express';
import  controllerIndex  from '../controller/controllerIndex';
class IndexRoutes {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerIndex.index);
    }
}
const indexRoutes =  new IndexRoutes();
export default indexRoutes.router;
//1:00:08