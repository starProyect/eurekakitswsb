import { Router } from 'express';
import controllerDto from '../controller/controllerDto';
class RouterDto {
    router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.put('/:id', controllerDto.update);
    }
}
const routerDto = new RouterDto();
export default routerDto.router;