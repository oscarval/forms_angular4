import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido : null,
    email: '',
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises: Object[] = [
    {codigo: 'ES', texto: 'España'},
    {codigo: 'EEUU', texto: 'Estados Unidos'}
  ];

  sexos: string[] = ['Hombre', 'Mujer'];

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
  console.log('ngform', forma);
  console.log('valor', forma.value);
  }
}
