import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

voyage:Voyage;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private agenceService:AgenceService ) { }

  ngOnInit(): void {
    let identif=this.activatedRoute.snapshot.params['id'];
    this.voyage=this.agenceService.getbyid(identif);
  }


}