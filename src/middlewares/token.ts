import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
const token = {
    verifyToken: (req: Request, res:Response, next: NextFunction)=>{
        if(!req.headers.authorization){
            return res.status(401).send('Unauthorized request');
        }
        const token = req.headers.authorization.split(' ')[1];
        if(token === 'null'){
            return res.status(401).send('Unauthorized request');
        }
        const payload = jwt.verify(token, 'secret');
        if(!payload){
            return res.status(401).send('Unauthorized request');
        }

       // req.idpersona = payload.subject;
        next();
    }
}

export default module.exports = token;