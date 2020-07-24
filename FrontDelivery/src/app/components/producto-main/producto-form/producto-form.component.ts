import { Component, OnInit, HostBinding } from '@angular/core';
import { PRODUCTOService } from 'src/app/services/producto.service';
import { PRODUCTOCATEGORIAService } from 'src/app/services/producto-categoria.service';
import { PRODUCTO } from 'src/app/models/producto';
import { PRODUCTOCATEGORIA } from 'src/app/models/producto-categoria';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes,faSave } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  faSave = faSave;
  faTimes = faTimes;
  
  form: FormGroup;  
  submitted: boolean = false;
  @HostBinding('class') clases = 'row';
  producto:PRODUCTO=new PRODUCTO;
  producto_categoria:PRODUCTOCATEGORIA[] = [];
  // prodcat:PRODUCTOCATEGORIA=new PRODUCTOCATEGORIA;
  constructor(private productoService: PRODUCTOService,private prodcatService:PRODUCTOCATEGORIAService, private formBuilder: FormBuilder ,private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.prodcatService.list().subscribe(result => {      
      this.producto_categoria = result;
    });
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.productoService.retrieve(params['id']).subscribe(
            result => this.producto = result
          )
        }
      }
    );

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      precio: ['', [Validators.required,Validators.pattern('^\\d+\\.\\d{2}$')]],
      categoria: ['',[Validators.required]],
      imageUrl: ['',[Validators.required]],      
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.productoService.save(this.producto).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.router.navigate(['/productos']);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.producto = new PRODUCTO();
  }

}
