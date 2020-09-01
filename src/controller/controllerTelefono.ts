import { Request, Response } from 'express';
import  { Telefono }  from '../models/Telefono';
import pool from '../database';
class ControllerTelefono {
    public async listAll(req: Request, res: Response) {
        const telefono = await (await pool).query('SELECT * FROM telefono');
        const result = telefono.length;
        if (result > 0) {
            return res.json(telefono);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const telefonoOne = await (await pool).query('SELECT * FROM telefono WHERE idtelefono=?', [id]);
        const result = telefonoOne.length;
        if (result > 0) {
            return res.json(telefonoOne);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { domisoci,convencional,celular1,celular2,estado} = req.body;
        let newTelefono: Telefono = {
            domisoci: domisoci,
            convencional: convencional,
            celular1: celular1,
            celular2: celular2,
            estado: estado,
            created_at: new Date
        }
        const telefono = await (await pool).query('INSERT INTO telefono SET ?', [newTelefono]);
        const result = telefono.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const {domisoci, convencional,celular1,celular2,estado} = req.body;
        let newTelefono: Telefono = {
            domisoci: domisoci,
            convencional: convencional,
            celular1: celular1,
            celular2: celular2,
            estado: estado,
            created_at: new Date
        }
        const telef =  await (await pool).query('UPDATE  telefono SET ? WHERE idtelefono=?', [newTelefono, id]);
        const result = telef.affectedRows;
        if(result > 0){
            return res.status(200).send({message: 'Actualizado'});
        } else {
            return res.status(204).send({message: 'No Actualizado'});
        }
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const telef = await (await pool).query('DELETE FROM telefono WHERE idtelefono=?', [id]);
        const result = telef.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerTelefono = new ControllerTelefono();
export default controllerTelefono;