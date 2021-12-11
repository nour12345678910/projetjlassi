import { Component, OnInit } from '@angular/core';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
lesvoyages:Voyage[]=[];
  constructor(private agenceService:AgenceService) { }

  ngOnInit(): void {

    this.agenceService.getvoyages()
    .subscribe(data=>this.lesvoyages=data)
  }
  oncherche(ch:string)
  {console.log(ch);
  this.lesvoyages=this.lesvoyages.filter(l=>l.nom.includes(ch))
  
  }
}
