import { Router } from 'express';
import  controllerConsultas from '../controller/controllerConsultas';
class RouterConsultas {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/categoria', controllerConsultas.onGetCategoria);
        this.router.get('/producto', controllerConsultas.onGetProducto);
        this.router.get('/pers', controllerConsultas.onGetPersona);
        this.router.post('/email', controllerConsultas.onGetEmail);
        this.router.get('/pdt/:id', controllerConsultas.listOnePDT);
        this.router.get('/promopp', controllerConsultas.promocionPP);
        this.router.get('/promoppi', controllerConsultas.promocionPPI);
        this.router.get('/promouni/:id', controllerConsultas.promocionUni);
        this.router.get('/devedvp/:id', controllerConsultas.detalleVentadvp);
        this.router.get('/dto', controllerConsultas.onGetDto);
        this.router.get('/numfact', controllerConsultas.onGetNumFactura);
        this.router.get('/idfact', controllerConsultas.onGetIdFactura);
        this.router.get('/productouni/:id', controllerConsultas.productouni);
        this.router.get('/personafactura/:id', controllerConsultas.onGetPersonaFactura);
        this.router.get('/tipopago', controllerConsultas.onGetTipoPago);
        this.router.get('/pfpaypal/:id', controllerConsultas.onGetPagoFactPaypal); // muestra solo las facturas echas en paypal
        this.router.get('/pftransbanc/:id', controllerConsultas.onGetPagoFactTransBanc); // muestra solo las facturas echas en Transfer bancaria
        this.router.get('/pfefectivo/:id', controllerConsultas.onGetPagoFactEfectivo); // muestra solo las facturas echas en efectivo
        this.router.get('/pfindiv/:id', controllerConsultas.onGetPagoFactIndiv); // muestra los datos por el numero de factura
        this.router.get('/pagopaypal/:id', controllerConsultas.onGetPagoPaypal); // muestra el pago final de paypal
        this.router.get('/pagotransbanc/:id', controllerConsultas.onGetPagoTransBanc); // muestra el pago final de Transfer bancaria
        this.router.get('/pagoefectivo/:id', controllerConsultas.onGetPagoEfectivo); // muestra el pago final de efectivo
        this.router.get('/facturadv/:id', controllerConsultas.onGetFacturadv); // muestra los detalles final en el pdf
        this.router.get('/facturatotal/:id', controllerConsultas.onGetFacturaTotal); // muestra el pago total final en el pdf
        this.router.get('/reportpers', controllerConsultas.onGetReportPersona); // muestra el reporte persona en pdf
        this.router.get('/reportcateg', controllerConsultas.onGetReportCategoria); // muestra el reporte categoria en pdf
        this.router.get('/reportprod', controllerConsultas.onGetReportProducto); // muestra el reporte producto en pdf
        this.router.get('/reportpromo', controllerConsultas.onGetReportPromociones); // muestra el reporte promocion en pdf
    }
}
const routerConsultas =  new RouterConsultas();
export default routerConsultas.router;