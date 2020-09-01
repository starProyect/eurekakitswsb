import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.json({faby:'joder'})
    }

}
const controllerIndex = new ControllerIndex();
export default controllerIndex;