import { Request, Response } from 'express';
import pool from '../database';
import { Paypal } from '../models/Paypal';
class ControllerPaypal {

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        let newPaypal: Paypal = {
            idformapago: idformapago,
            numfactura: numfactura, 
            preciofactura: preciofactura,
            estado: estado,
            created_at: new Date
        };
        const paypal = await (await pool).query('INSERT INTO paypal SET ?', [newPaypal]);
        const result = paypal.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
}
const controllerPaypal = new ControllerPaypal();
export default controllerPaypal;