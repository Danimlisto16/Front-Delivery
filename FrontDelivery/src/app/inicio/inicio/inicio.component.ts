import { Component, OnInit, ElementRef, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private elementRef: ElementRef,@Inject(DOCUMENT) private doc) { }

  ngOnInit(): void {
    var s14 = document.createElement("script");
    // s14.type = "text/javascript";
     s14.src = "https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js";
     this.elementRef.nativeElement.appendChild(s14);
  }

}
