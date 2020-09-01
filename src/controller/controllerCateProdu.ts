import { Request, Response } from 'express';
import pool from '../database';
class ControllerCateProdu {
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM producto WHERE idcategoria=?', [id]);
        const result = clienteOne.length;
        if (result > 0) {
            return res.json(clienteOne);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
}
const controllerCateProdu = new ControllerCateProdu();
export default controllerCateProdu;