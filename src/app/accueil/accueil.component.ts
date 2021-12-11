import { Component, OnInit } from '@angular/core';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
lesvoyages:Voyage[]=[];
  constructor(private agenceService:AgenceService) { }
  destination:Voyage[]=[];
  ngOnInit(): void {
    this.destination=this.agenceService.getvoyage();
    this.agenceService.getvoyages()
    .subscribe(data=>this.lesvoyages=data)
  }



}
