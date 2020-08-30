import { CAB_FACTURA } from './cab-factura';
import { PRODUCTO } from './producto';

export class DETALLEFACTURA {
     id_detalle:number;
     id_cFactura:number;
     id_producto:number;
     cantidad:number;
     subtotal:number;
     caB_FACTURA:CAB_FACTURA;
     producto:PRODUCTO;
}
