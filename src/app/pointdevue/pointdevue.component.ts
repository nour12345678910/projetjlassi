import { Component, OnInit } from '@angular/core';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-pointdevue',
  templateUrl: './pointdevue.component.html',
  styleUrls: ['./pointdevue.component.css']
})
export class PointdevueComponent implements OnInit {

  constructor(private agenceService:AgenceService) { }
  lesVoyages:Voyage[]=[];
  ngOnInit(): void {
    this.lesVoyages=this.agenceService.getvoyage();
    }

}
