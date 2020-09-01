import { Request, Response } from 'express';
import pool from '../database';
import { Promocion } from '../models/Promocion';
class ControllerPromo {
    public async listAll(req: Request, res: Response) {
        const promo = await (await pool).query('SELECT * FROM promociones');
        const result = promo.length;
        if (result > 0) {
            return res.json(promo);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const promoOne = await (await pool).query('SELECT * FROM promociones WHERE idpromociones=?', [id]);
        const result = promoOne.length;
        if (result > 0) {
            return res.json(promoOne);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idproducto, dto, fechainicio, fechafin, descripcion, estado,} = req.body;
        let newPromo: Promocion = {
            idproducto: idproducto,
            dto: dto,
            fechainicio: fechainicio,
            fechafin: fechafin,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date            
        };
        const promo = await (await pool).query('INSERT INTO promociones SET ?', [newPromo]);
        const result = promo.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { idproducto, dto, fechainicio, fechafin, descripcion, estado,} = req.body;
        let newPromo: Promocion = {
            idproducto: idproducto,
            dto: dto,
            fechainicio: fechainicio,
            fechafin: fechafin,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date            
        };
        const promo = await (await pool).query('UPDATE  promociones SET ? WHERE idpromociones=?', [newPromo, id]);
        const result = promo.affectedRows;
        if(result > 0){
            return res.status(200).send({message: 'Actualizado'});
        } else {
            return res.status(204).send({message: 'No Actualizado'});
        }
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        let newPromo: Promocion = {
            estado: estado,
        };
        const promo = await (await pool).query('UPDATE  promociones SET ? WHERE idpromociones=?', [newPromo, id]);
        const result = promo.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerPromo = new ControllerPromo();
export default controllerPromo;