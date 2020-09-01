import { Request, Response } from 'express';
import { Direccion } from '../models/Direccion';
import pool from '../database';
class ControllerDireccion {
    public async listAll(req: Request, res: Response) {
        const direccion = await (await pool).query('SELECT * FROM direccion');
        const result = direccion.length;
        if (result > 0) {
            return res.json(direccion);
        } else {
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const direccionOne = await (await pool).query('SELECT * FROM direccion WHERE iddireccion=?', [id]);
        const result = direccionOne.length;
        if (result > 0) {
            return res.json(direccionOne);
        } else {
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { domisoci, provincia, canton, parroquia, sector, calleprincipal, numeracion, callesecundaria, descripcion, estado } = req.body;
        let newDireccion: Direccion = {
            domisoci: domisoci,
            provincia: provincia,
            canton: canton,
            parroquia: parroquia,
            sector: sector,
            calleprincipal: calleprincipal,
            numeracion: numeracion,
            callesecundaria: callesecundaria,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date
        }
        const direccion = await (await pool).query('INSERT INTO direccion SET ?', [newDireccion]);
        const result = direccion.insertId;
        if (result > 0) {
            return res.status(200).send({ message: 'Registrado' })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { domisoci, provincia, canton, parroquia, sector, calleprincipal, numeracion, callesecundaria, descripcion, estado } = req.body;
        let newDireccion: Direccion = {
            domisoci: domisoci,
            provincia: provincia,
            canton: canton,
            parroquia: parroquia,
            sector: sector,
            calleprincipal: calleprincipal,
            numeracion: numeracion,
            callesecundaria: callesecundaria,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date
        }
        const direccion = await (await pool).query('UPDATE  direccion SET ? WHERE iddireccion=?', [newDireccion, id]);
        const result = direccion.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Actualizado' });
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const direccion = await (await pool).query('DELETE FROM direccion WHERE iddireccion=?', [id]);
        const result = direccion.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerDireccion = new ControllerDireccion();
export default controllerDireccion;