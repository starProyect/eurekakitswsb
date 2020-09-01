export interface DetalleVenta {
    iddetalleventa?: number,
    idfactura: number,
    idproducto: number,
    cantidad: string,
    precio: number,
    total: number,
    estado: number,
    created_at?: Date,
}