import { Component, OnInit } from '@angular/core';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
import { ReportesService } from 'src/app/services/reportes.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

import { PRODUCTO } from 'src/app/models/producto';
import { DETALLEFACTURA } from 'src/app/models/detalle-factura';

@Component({
  selector: 'app-reporte-total',
  templateUrl: './reporte-total.component.html',
  styleUrls: ['./reporte-total.component.css']
})
export class ReporteTotalComponent implements OnInit {
  producto_categoria:PRODUCTOCATEGORIA[] = [];
  filtro:boolean=false
 // total;
  categoria:number;
  //chart: any;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  public chartColors: Color[]=[{
    backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ]
  }];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33] }
  ];

  constructor(private prodcatService:PRODUCTOCATEGORIAService, private reportesService:ReportesService) {
    
   }
  
  ngOnInit(): void {
    this.prodcatService.list().subscribe(result => {      
      this.producto_categoria = result;
    });
    //////////////////////////////////////////
    
  }

  async generarReporte(){
    this.agruparTerminos();  
  }

  async agruparTerminos(){
   // this.total=0.0;
    this.prodcatService.retrieve(this.categoria).subscribe(result => {      
    this.agregarEtiquetas(result) ;
    });
    this.reportesService.list(this.categoria).subscribe(result =>{
      this.agregarDatos(result,this.barChartLabels);
      
    });
    
   // console.log(this.ingresos);

  }

  async agregarEtiquetas(result){
    this.barChartLabels= await this.reportesService.getLabels(result);
    console.log(this.barChartLabels);
  }

  async agregarDatos(result,etiquetas:any[]){
    
    this.barChartData[0].data = await this.reportesService.getData(result,etiquetas);
    console.log(this.barChartData[0].data);

    this.filtro=true;
    
  }

}
