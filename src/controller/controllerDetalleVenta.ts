import { Request, Response } from 'express';
import pool from '../database';
import { DetalleVenta } from '../models/DetalleVenta';
class ControllerDetalleVenta {
    public async listAll(req: Request, res: Response) {
        const detalleVenta = await (await pool).query('SELECT * FROM detalleventas');
        const result = detalleVenta.length;
        if (result > 0) {
            return res.json(detalleVenta);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idfactura, idproducto, cantidad, precio, total, estado } = req.body;
        console.log(req.body);
        let newDetalleVenta: DetalleVenta = {
            idfactura: idfactura,
            idproducto: idproducto,
            cantidad: cantidad,
            precio: precio,
            total: total,
            estado: estado,
            created_at: new Date
        };
        console.log(newDetalleVenta);
        const detaventa = await (await pool).query('INSERT INTO detalleventas SET ?', [newDetalleVenta]);
        const result = detaventa.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const deletedt = await (await pool).query('DELETE FROM detalleventas WHERE iddetalleventas=?', [id]);
        const result = deletedt.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerDetalleVenta = new ControllerDetalleVenta();
export default controllerDetalleVenta;