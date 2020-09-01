import { Request, Response } from 'express';
import pool from '../database';
import { Producto } from '../models/Producto';
class ControllerProducto {
    public async listAll(req: Request, res: Response) {
        const producto = await (await pool).query('SELECT * FROM producto');
        const result = producto.length;
        if (result > 0) {
            return res.json(producto);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productoOne = await (await pool).query('SELECT * FROM producto WHERE idproducto=?', [id]);
        const result = productoOne.length;
        if (result > 0) {
            return res.json(productoOne);
        }else{
            return res.status(204).send({ message: 'No Encontrado' })
        }
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idcategoria, nombre, describir, precio, stock, estado } = req.body;
        const { filename } = req.file;
        let newProducto: Producto = {
            idcategoria: idcategoria,
            nombre: nombre,
            describir:describir,
            image: '/uploads/' + filename,
            precio: precio,
            stock: stock,
            estado: estado,
            created_at: new Date            
        };
        const producto =  await (await pool).query('INSERT INTO producto SET ?', [newProducto]);
        const result = producto.insertId;
        if(result > 0){
            return res.status(200).send({ message: 'Registrado' })
        }else{
            return res.status(204).send({ message: 'No Registrado' })
        }
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { idcategoria, nombre, describir, precio, stock, estado } = req.body;
        const { filename } = req.file;
        
        let newProducto: Producto = {
            idcategoria: idcategoria,
            nombre: nombre,
            describir:describir,
            image: '/uploads/' + filename, // 
            precio: precio,
            stock: stock,
            estado: estado,
            created_at: new Date  
        };
        const producto = await (await pool).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto, id]);
        const result = producto.affectedRows;
        if(result > 0){
            return res.status(200).send({message: 'Actualizado'});
        } else {
            return res.status(204).send({message: 'No Actualizado'});
        }
    }
    public async updateStock(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const {  stock } = req.body;
        
        let newStock: Producto = {
            stock: stock
        };
        const stockNew = await (await pool).query('UPDATE  producto SET ? WHERE idproducto=?', [newStock, id]);
        const result = stockNew.affectedRows;
        if(result > 0){
            return res.status(200).send({message: 'Actualizado'});
        } else {
            return res.status(204).send({message: 'No Actualizado'});
        }
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        const newProducto: Producto = {
            estado: estado
        };
        const producto = await (await pool).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto,id]);
        const result = producto.affectedRows;
        if (result > 0) {
            return res.status(200).send({ message: 'Eliminado' });
        } else {
            return res.status(204).send({ message: 'No Eliminado' });
        }
    }
}
const controllerProducto = new ControllerProducto();
export default controllerProducto;