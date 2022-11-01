import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  error=false;
  pin= "";

  ingresar(){
   this.pin ==="" ? this.error=true : this.error=false

   setTimeout(()=> {this.error=false},3000)
  }
}
