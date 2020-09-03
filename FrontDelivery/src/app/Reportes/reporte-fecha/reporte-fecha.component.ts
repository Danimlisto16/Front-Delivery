import { Component, OnInit } from '@angular/core';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reporte-fecha',
  templateUrl: './reporte-fecha.component.html',
  styleUrls: ['./reporte-fecha.component.css']
})
export class ReporteFechaComponent implements OnInit {
  producto_categoria:PRODUCTOCATEGORIA[] = [];
  fecha: string;
  categoria:number;
  filtro:boolean=false;
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['SciFi', 'Drama', 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  
  constructor(private prodcatService:PRODUCTOCATEGORIAService, private reportesService:ReportesService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.prodcatService.list().subscribe(result => {      
      this.producto_categoria = result;
    });
  }

  async generarReporte(){
    this.agruparTerminos(); 
  }

  async agruparTerminos(){
   // this.total=0.0;
    this.prodcatService.retrieve(this.categoria).subscribe(result => {      
    this.agregarEtiquetas(result) ;
    });
    this.reportesService.search(this.categoria,this.fecha).subscribe(result =>{
      this.agregarDatos(result,this.pieChartLabels);
      
    });
    
   // console.log(this.ingresos);

  }

  async agregarEtiquetas(result){
    this.pieChartLabels= await this.reportesService.getLabels(result);
    console.log(this.pieChartLabels);
  }

  async agregarDatos(result,etiquetas:any[]){
    
    this.pieChartData= await this.reportesService.getDataBar(result,etiquetas);
    console.log(this.pieChartData);

    this.filtro=true;
    
  }

}
