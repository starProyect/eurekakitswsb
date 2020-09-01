import { Request, Response } from 'express';
import pool from '../database';
import { FormaPago } from '../models/FormaPago';
class ControllerFormaPago {

    public async createfp(req: Request, res: Response): Promise<any> { // creacion de forma de pago
        const { idfactura, idtipopago, estado } = req.body;
        let newFormaPago: FormaPago = {
            idfactura: idfactura,
            idtipopago: idtipopago,
            estado: estado,
            created_at: new Date
        };
        const fp = await (await pool).query('INSERT INTO formapago SET ?', [newFormaPago]);
        const result = fp.insertId;
        if (result > 0) {
            return res.status(200).send({ message: 'Registrado' })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async updateEstado(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        console.log(req.body);
        const newFormaPago: FormaPago = {
            estado: estado,
        };
        const formaPagoEstado = await (await pool).query('UPDATE  formapago SET ? WHERE idformapago=?', [newFormaPago, id]);
        const result = formaPagoEstado.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Actualizado' });
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }

}
const controllerFormaPago = new ControllerFormaPago();
export default controllerFormaPago;