import { Component, OnInit } from '@angular/core';
import { ChartDataSets, RadialChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ReporteVentas } from 'src/app/models/reporte-ventas';
import { ReporteAlmacenadoService } from 'src/app/services/reporte-almacenado.service';
@Component({
  selector: 'app-reporte-productos-vendidos',
  templateUrl: './reporte-productos-vendidos.component.html',
  styleUrls: ['./reporte-productos-vendidos.component.css']
})
export class ReporteProductosVendidosComponent implements OnInit {

  reportes: ReporteVentas[]=[];
  etiquetas:string[];
  datos:number[];
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Productos Vendidos' }
  ];
  public radarChartType: ChartType = 'radar';

  radarChartColors: Color[] = [
    {
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private reporteAlmacenadoService: ReporteAlmacenadoService) { }

  ngOnInit(): void {
    this.reporteAlmacenadoService.list().subscribe(result => {      
      this.agregarDatos(result);
    });

    
    console.log(this.etiquetas);
    console.log(this.datos);
    
    
  }

   async agregarDatos(result){
    this.etiquetas= await this.reporteAlmacenadoService.agregarLabels(result);
      this.datos= await this.reporteAlmacenadoService.agregarDatos(result);
    this.radarChartLabels=this.etiquetas;
    this.radarChartData[0].data=this.datos;
  }

}
