import { Request, Response } from 'express';
import pool from '../database';
import { Dto } from '../models/Dto';
class ControllerDto {
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { dto , estado } = req.body;
        let newDto: Dto = {
            dto: dto,
            estado: estado
        };
        const dtoput = await (await pool).query('UPDATE  dto SET ? WHERE iddto=?', [newDto, id]);
        const result = dtoput.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Actualizado' });
        } else {
            return res.status(204).send({ message: 'No Actualizado' });
        }
    }
}
const controllerDto = new ControllerDto();
export default controllerDto;