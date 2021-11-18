import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent implements OnInit {

  convite: any = {
    data: new Date,
    preco: 35.00,
    ingresso:84.65,
    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
