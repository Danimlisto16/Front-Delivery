import { Pipe, PipeTransform } from '@angular/core';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';


@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {
  // producto_categoria:PRODUCTOCATEGORIA[] = [];
  // prodcat:PRODUCTOCATEGORIA=new PRODUCTOCATEGORIA;
  //producto_categoria:PRODUCTOCATEGORIA[] = [];
  //prodcat:PRODUCTOCATEGORIA=new PRODUCTOCATEGORIA;
  
  constructor() { }
  
  transform(value: number): string { 
    return null;
  }

}
