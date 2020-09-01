export interface CateProdu {
    idproducto?: number,
    idcategoria: string,
    nombre: string,
    image: string,
    precio: number,
    stock: number,
    estado: number,
    created_at?: Date,
}