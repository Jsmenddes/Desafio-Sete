import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-pai',
  template: ""
})
export class ComponentePaiComponent  {

  numeros:number[]=[];

  @Input() numeroComponent: number = 0; 
  valor: any;
  isPar(valor: number): string {return valor % 2 === 0 ? "par" : "ímpar";}
  primo(cont: number){
    for(let divisor = 2; divisor < cont ; divisor++){
      if (cont % divisor == 0) return false ?'primo': 'não é primo'}
    
    return true  ? "primo" : "não é primo";
    
  }
  constructor(private router: Router) { }


  CalculoCubo(): void {
    this.router.navigate(['/cubo'], { queryParams: { order: 'cubo' } });
  }
  }
  
