import express, { Application, urlencoded, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/routerIndex';
import routerAuth from './routes/routerAuth';
import routeCategoria from './routes/routerCategoria';
import routeProducto from './routes/routerProducto';
import routerPersona from './routes/routerPersona';
import routerTelefono from './routes/routerTelefono';
import routerDireccion from './routes/routerDireccion';
import routerCateProdu from './routes/routerCateProdu';
import routerDetalleVenta from './routes/routerDetalleVenta';
import routerDto from './routes/routerDto';
import routerConsultas from './routes/routerConsultas';
import routerPromocion from './routes/routerPromocion';
import routerFactura from './routes/routerFactura';
import routerFormaPago from './routes/routerFormaPago';
import routerPaypal from './routes/routerPaypal';
import routerTransferenciaBancaria from './routes/routerTransferenciaBancaria';
import routerEfectivo from './routes/routerEfectivo';
import routerPaypalBuy from './routes/routerPaypalBuy';
import multer from './libs/multer';
import path from 'path';
import './middlewares/token';


class Server {
    private app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
        this.app.use(multer.single('image'));
        this.app.use(express.static(path.join(__dirname,'public')));
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/login',routerAuth);
        this.app.use('/api/categoria',routeCategoria);
        this.app.use('/api/producto',routeProducto);
        this.app.use('/api/cateProdu',routerCateProdu);
        this.app.use('/api/detaVenta',routerDetalleVenta);
        this.app.use('/api/dto',routerDto);///
        this.app.use('/api/persona',routerPersona);
        this.app.use('/api/telefono',routerTelefono);
        this.app.use('/api/direccion',routerDireccion);
        this.app.use('/api/consultas',routerConsultas);
        this.app.use('/api/promocion',routerPromocion);
        this.app.use('/api/factura',routerFactura);
        this.app.use('/api/formapago',routerFormaPago);
        this.app.use('/api/paypal',routerPaypal);
        this.app.use('/api/transbanc',routerTransferenciaBancaria);
        this.app.use('/api/efect',routerEfectivo);
        this.app.use('/api/paypalbuy',routerPaypalBuy);
    }
    aMiddleware(req: Request, res: Response, next: NextFunction) {
        next();
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server online in the port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

//45:18
