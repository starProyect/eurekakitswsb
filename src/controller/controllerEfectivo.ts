import { Request, Response } from 'express';
import pool from '../database';
import { Efectivo } from '../models/Efectivo';
class ControllerEfectivo {

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        let newEfectivo: Efectivo = {
            idformapago: idformapago,
            numfactura: numfactura,
            preciofactura: preciofactura,
            estado: estado,
            created_at: new Date
        };
        const efect = await (await pool).query('INSERT INTO efectivo SET ?', [newEfectivo]);
        const result = efect.insertId;
        if (result > 0) {
            return res.status(200).send({ message: 'Registrado' })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
}
const controllerEfectivo = new ControllerEfectivo();
export default controllerEfectivo;