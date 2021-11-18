import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {
  
  valor:number=0

  router: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}