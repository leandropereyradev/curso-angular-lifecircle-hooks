import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    // Se llama antes de cualquier ciclo de vida
    console.log('constructor');
  }

  ngOnInit(): void {
    // Antes del cambio de una propiedad
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Justo despues del constructor
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    // Se llada cada vez que una propiedad del componente o directiva es revisada
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Después de ngOnInit, cuando el componente es inicializado
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Se llama despues de cada revisión del componente o directiva
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Despues del ngAfterContentInit
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Llamado después de casa revisión de las vistas del componente o directiva
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Se llama justo antes de que el componente o directiva va a ser destruida
    console.log('ngOnDestroy');
  }
}
