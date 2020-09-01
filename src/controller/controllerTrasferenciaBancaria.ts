import { Request, Response } from 'express';
import pool from '../database';
import { TrasnferenciaBancaria } from '../models/TransferenciaBancaria';
class ControllerTrasnferenciaBancaria {

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        const { filename } = req.file;
        let newTrasnferenciaBancaria: TrasnferenciaBancaria = {
            idformapago: idformapago,
            numfactura: numfactura,
            preciofactura: preciofactura,
            image: '/uploads/' + filename,
            estado: estado,
            created_at: new Date
        };
        const transferenciabancaria = await (await pool).query('INSERT INTO transferenciabancaria SET ?', [newTrasnferenciaBancaria]);
        const result = transferenciabancaria.insertId;
        if (result > 0) {
            return res.status(200).send({ message: 'Registrado' })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
}
const controllerTrasnferenciaBancaria = new ControllerTrasnferenciaBancaria();
export default controllerTrasnferenciaBancaria;