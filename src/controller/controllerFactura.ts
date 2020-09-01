import { Request, Response } from 'express';
import pool from '../database';
import { Factura } from '../models/Factura';
class ControllerFactura {
    public async listAll(req: Request, res: Response) {
        const factura = await (await pool).query('SELECT * FROM factura');
        const result = factura.length;
        if (result > 0) {
            return res.json(factura);
        } else {
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idpersona, numfactura, estado } = req.body;
        const newFactura: Factura = {
            idpersona: idpersona,
            numfactura: numfactura,
            estado: estado,
            created_at: new Date,
        };
        const newFactG = await (await pool).query('INSERT INTO factura SET ?', [newFactura]);
        const result = newFactG.insertId;
        if (result > 0) {
            return res.status(200).send({ result })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }

    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { subtotal, dto, iva, total } = req.body;
        const newFactura: Factura = {
            subtotal: subtotal,
            dto: dto,
            iva: iva,
            total: total
        };
        console.log(newFactura);
        const fact = await (await pool).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
        const result = fact.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Actualizado' });
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }
    public async updateEstado(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        const newFactura: Factura = {
            estado: estado,
        };
        const factEstado = await (await pool).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
        const result = factEstado.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Actualizado' });
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }
}
const controllerFactura = new ControllerFactura();
export default controllerFactura;