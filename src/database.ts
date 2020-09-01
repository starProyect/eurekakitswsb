import mysql from 'promise-mysql';
import keys from './security/keys';
const pool = mysql.createPool(keys.databasep);
pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion online');
}));

export default pool;