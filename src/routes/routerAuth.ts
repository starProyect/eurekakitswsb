import { Router } from 'express';
import controllerAuth from '../controller/controllerAuth';
class RouterAuth {
    router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/up', controllerAuth.loginUp);
        this.router.post('/in', controllerAuth.loginIn);
    }
}
const routerAuth = new RouterAuth();
export default routerAuth.router;