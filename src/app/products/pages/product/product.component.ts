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
  }

  ngOnInit(): void {
    // Antes del cambio de una propiedad
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Justo despues del constructor
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    // Se llada cada vez que una propiedad del componente o directiva es revisada
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    // Después de ngOnInit, cuando el componente es inicializado
    throw new Error('Method not implemented.');
  }

  ngAfterContentChecked(): void {
    // Se llama despues de cada revisión del componente o directiva
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    // Despues del ngAfterContentInit
    throw new Error('Method not implemented.');
  }

  ngAfterViewChecked(): void {
    // Llamado después de casa revisión de las vistas del componente o directiva
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // Se llama justo antes de que el componente o directiva va a ser destruida
    throw new Error('Method not implemented.');
  }
}
