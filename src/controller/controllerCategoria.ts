import { Request, Response } from 'express';
import pool from '../database';
import { Categoria } from '../models/Categoria';
class ControllerCategoria {
    public async listAll(req: Request, res: Response) {
        const categoria = await (await pool).query('SELECT * FROM categoria where estado = 1');
        const result = categoria.length;
        if (result > 0) {
            return res.json(categoria);
        } else {
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM categoria WHERE idcategoria=?', [id]);
        const result = clienteOne.length;
        if (result > 0) {
            return res.json(clienteOne);
        } else {
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { nombre, estado } = req.body;
        const { filename } = req.file;
        console.log(filename);
        const newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/' + filename,
            estado: estado,
            created_at: new Date
        };
        const newCate = await (await pool).query('INSERT INTO categoria SET ?', [newCategoria]);
        const result = newCate.insertId;
        if (result > 0) {
            return res.status(200).send({ message: 'Registrado' })
        } else {
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { nombre, estado } = req.body;
        const { filename } = req.file;
        let newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/' + filename,
            estado: estado
        };
        const categoriaPut = await (await pool).query('UPDATE  categoria SET ? WHERE idcategoria=?', [newCategoria, id]);
        const result = categoriaPut.affectedRows;
        if (result > 0) {
            return res.status(200).send(true);
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        let newCategoria: Categoria = {
            estado: estado
        }
        const categoriaPut = await (await pool).query('UPDATE  categoria SET ? WHERE idcategoria=?', [newCategoria, id]);
        const result = categoriaPut.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerCategoria = new ControllerCategoria();
export default controllerCategoria;