import { Request, Response } from 'express';
import  { Persona }  from '../models/Persona';
import pool from '../database';
import helpers from '../libs/helpers'
class ControllerPersona {
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personaOne = await (await pool).query('SELECT * FROM persona WHERE idpersona=?', [id]);
        const result = personaOne.length;
        if (result > 0) {
            return res.json(personaOne);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idtelefono,iddireccion,cedula,nombres,apellidos,fechanacimiento,email,password,requerimiento,estado} = req.body;
        let newPersona: Persona = {
            idtelefono: idtelefono,
            iddireccion: iddireccion,
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            fechanacimiento: new Date(fechanacimiento),
            email: email,
            password: password,
            requerimiento: requerimiento,
            estado: estado,
            created_at: new Date
        };
        newPersona.password = await helpers.encriptPassword(password);
        const persona = await (await pool).query('INSERT INTO persona SET ?', [newPersona]);
        const result = persona.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { idtelefono,iddireccion,cedula,nombres,apellidos,fechanacimiento,email,password,requerimiento,estado} = req.body;
        let newPersona: Persona = {
            idtelefono: idtelefono,
            iddireccion: iddireccion,
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            fechanacimiento: fechanacimiento,
            email: email,
            password: password,
            requerimiento: requerimiento,
            estado: estado,
            created_at: new Date
        }
        const personaPut = await (await pool).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
        const result = personaPut.affectedRows;
        if(result > 0){
            return res.status(200).send({message: 'Actualizado'});
        } else {
            return res.status(204).send({message: 'No Actualizado'});
        }
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        const { estado } = req.body;
        let newPersona: Persona = {
            estado: estado
        }
        const personDel = await (await pool).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
        const result = personDel.affectedRows;
        if(result > 0){
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerPersona = new ControllerPersona();
export default controllerPersona;