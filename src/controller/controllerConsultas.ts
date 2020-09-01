import { Request, Response } from 'express';
import pool from '../database';
class ControllerConsultas {
    public async onGetCategoria(req: Request, res: Response): Promise<any> {
        const categoriall = await (await pool).query('select * from viewcategoria where estado = 1'); // lista a la persona para la cabecera de la factura
        const result = categoriall.length;
        if (result > 0) {
            return res.json(categoriall);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetProducto(req: Request, res: Response): Promise<any> {
        const productoall = await (await pool).query('select * from viewproducto where estado = 1'); // lista a la persona para la cabecera de la factura
        const result = productoall.length;
        if (result > 0) {
            return res.json(productoall);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetPersona(req: Request, res: Response): Promise<any> {
        const personall = await (await pool).query('select * from viewpersona where estado = 1'); // lista a la persona para la cabecera de la factura
        const result = personall.length;
        if (result > 0) {
            return res.json(personall);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetEmail(req: Request, res: Response): Promise<any> {
        const { email } = req.body;
        console.log(req.body);
        console.log(email);
        const emailall = await (await pool).query('select email from persona where email = ?', [email]); // lista a la persona para la cabecera de la factura
        const result = emailall.length;
        if (result > 0) {
            return res.status(200).send(true);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async listOnePDT(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from personapdt where idpersona = ?', [id]); // lista a la persona para la cabecera de la factura
        const result = pdtOne.length;
        if (result > 0) {
            return res.json(pdtOne);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async productouni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const prodOne = await (await pool).query('select * from viewproductouni where idproducto = ?', [id]);// para visualizar las promociones administrador
        const result = prodOne.length;
        if (result > 0) {
            return res.json(prodOne);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async promocionPP(req: Request, res: Response): Promise<any> {
        const promopp = await (await pool).query('select * from viewpromocionespp where estado = 1');// para visualizar las promociones administrador
        const result = promopp.length;
        if (result > 0) {
            return res.json(promopp);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async promocionPPI(req: Request, res: Response): Promise<any> {
        const promoppi = await (await pool).query('select * from viewpromocionesppi where estado = 1');// para visualizar las promociones administrador
        const result = promoppi.length;
        if (result > 0) {
            return res.json(promoppi);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async promocionUni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const promouni = await (await pool).query('select * from viewpromocionesppuni where idpromociones = ?', [id]);// para visualizar las promociones administrador
        const result = promouni.length;
        if (result > 0) {
            return res.json(promouni);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async detalleVentadvp(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const detalledvp = await (await pool).query('select * from viewdetalleventadvp where  idfactura = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        const result = detalledvp.length;
        if (result > 0) {
            return res.json(detalledvp);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }

    public async onGetDto(req: Request, res: Response): Promise<any> {
        const dto = await (await pool).query('SELECT * FROM viewdto');// para visualizar detalle ventas con id de producto con su nombre
        const result = dto.length;
        if (result > 0) {
            return res.json(dto);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }

    public async onGetNumFactura(req: Request, res: Response): Promise<any> {
        const numFact = await (await pool).query('SELECT MAX(factura.numfactura)+1 AS numfactura FROM factura');// para visualizar detalle ventas con id de producto con su nombre
        const result = numFact.length;
        if (result > 0) {
            return res.json(numFact);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetIdFactura(req: Request, res: Response): Promise<any> {
        const idFact = await (await pool).query('SELECT MAX(factura.idfactura)+1 AS idfactura  FROM factura');// para visualizar detalle ventas con id de producto con su nombre
        const result = idFact.length;
        if (result > 0) {
            return res.json(idFact);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }

    public async onGetPersonaFactura(req: Request, res: Response): Promise<any> { // visualizar que cada persona tiene sus propias facturas
        const { id } = req.params;
        const personaFactura = await (await pool).query('select * from viewpersonafactura where estado = 1 AND idpersona = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        const result = personaFactura.length;
        if (result > 0) {
            return res.json(personaFactura);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetTipoPago(req: Request, res: Response): Promise<any> { // ver transferencia paypal efectivo
        const tipopago = await (await pool).query('SELECT * FROM viewtipopago');// para visualizar detalle ventas con id de producto con su nombre
        const result = tipopago.length;
        if (result > 0) {
            return res.json(tipopago);
        } else {
            return res.status(204).json({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoFactPaypal(req: Request, res: Response): Promise<any> { // ver facturas de tipo paypal
        const { id } = req.params;
        const pfpaypal = await (await pool).query('select * from viewpagofactptbe where idtipopago = 1 AND estado = 1 AND idpersona = ?', [id]);
        const result = pfpaypal.length;
        if (result > 0) {
            return res.json(pfpaypal);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoFactTransBanc(req: Request, res: Response): Promise<any> { // ver facturas de tipo transferencia bancaria
        const { id } = req.params;
        const pftransbanc = await (await pool).query('select * from viewpagofactptbe where idtipopago = 2 AND estado = 1 AND idpersona = ?', [id]);
        const result = pftransbanc.length;
        if (result > 0) {
            return res.json(pftransbanc);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoFactEfectivo(req: Request, res: Response): Promise<any> { // ver facturas de tipo efectivo
        const { id } = req.params;
        const pfefectivo = await (await pool).query('select * from viewpagofactptbe where idtipopago = 3 AND estado = 1 AND idpersona = ?', [id]);
        const result = pfefectivo.length;
        if (result > 0) {
            return res.json(pfefectivo);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoFactIndiv(req: Request, res: Response): Promise<any> { // ver por el numero de factura en la forma de pago para guardar en paypal tranferencia bancaria y efectivo
        const { id } = req.params;
        const pfefectivoindiv = await (await pool).query('select * from viewformapagopy where numfactura = ?', [id]);
        const result = pfefectivoindiv.length;
        if (result > 0) {
            return res.json(pfefectivoindiv);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoPaypal(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en paypal
        const { id } = req.params;
        const pagoPaypal = await (await pool).query('select * from viewpagopaypal where idpersona = ?', [id]);
        const result = pagoPaypal.length;
        if (result > 0) {
            return res.json(pagoPaypal);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoTransBanc(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Transferencia Bancaria
        const { id } = req.params;
        const pagoTransBanc = await (await pool).query('select * from viewpagotrasnbanc where idpersona = ?', [id]);
        const result = pagoTransBanc.length;
        if (result > 0) {
            return res.json(pagoTransBanc);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetPagoEfectivo(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const pagoEfectivo = await (await pool).query('select * from viewpagoefectivo where idpersona = ?', [id]);
        const result = pagoEfectivo.length;
        if (result > 0) {
            return res.json(pagoEfectivo);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetFacturadv(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const facturaDv = await (await pool).query('select * from viewFacturadv where numfactura =  ?', [id]);
        const result = facturaDv.length;
        if (result > 0) {
            return res.json(facturaDv);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetFacturaTotal(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const facturaTotal = await (await pool).query('select * from viewFacturaTotal where numfactura = ?', [id]);
        const result = facturaTotal.length;
        if (result > 0) {
            return res.json(facturaTotal);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetReportPersona(req: Request, res: Response): Promise<any> { // ver reporte de personas
        const reportPersona = await (await pool).query('select * from viewreportpersona');
        const result = reportPersona.length;
        if (result > 0) {
            return res.json(reportPersona);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetReportCategoria(req: Request, res: Response): Promise<any> { // ver reporte de Categorias
        const reportCategoria = await (await pool).query('select * from viewreportcategoria');
        const result = reportCategoria.length;
        if (result > 0) {
            return res.json(reportCategoria);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetReportProducto(req: Request, res: Response): Promise<any> { // ver reporte de producto
        const reportProducto = await (await pool).query('select * from viewreportproducto');
        const result = reportProducto.length;
        if (result > 0) {
            return res.json(reportProducto);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
    public async onGetReportPromociones(req: Request, res: Response): Promise<any> { // ver reporte de promociones
        const reportPromo = await (await pool).query('select * from viewreportpromociones');
        const result = reportPromo.length;
        if (result > 0) {
            return res.json(reportPromo);
        } else {
            return res.status(204).send({ message: 'No Encontrado' });
        }
    }
}
const controllerConsultas = new ControllerConsultas();
export default controllerConsultas;