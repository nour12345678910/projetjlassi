import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from '../agence.service';
import { Commentaire } from '../commentaire';
import { Voyage } from '../voyage';


@Component({
  selector: 'app-voyage',
  

  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private agenceService:AgenceService,private fb:FormBuilder) { }
id:number=0;


voyageForm:FormGroup=new FormGroup({});
  
f:FormGroup=new FormGroup({});
voyages:Voyage[]=[];
lesvoyages:Voyage[]=[];

  ngOnInit(): void {
    this.agenceService.getvoyages()
    .subscribe(data=>this.voyages=data)
   
    
    this.voyageForm=this.fb.group({
      nom:[''],
      prix:[0],
      enpromotion:[false]
    })
   this.id=this.activatedRoute.snapshot.params['id'],
   this.agenceService.getvoyages()
   .subscribe(
     voyages => this.lesvoyages=voyages
   )
  
  }


    oncherche(ch:string)
{
this.agenceService.getvoyages()
.subscribe(
  voyages => this.lesvoyages=voyages
)
this.agenceService.getvoyages()
.subscribe(
  () => this.lesvoyages=this.lesvoyages.filter(l=>l.nom.includes(ch))
  
)}



  onSubmit(){
    this.agenceService.addvoyage(this.voyageForm.value)
    .subscribe(data => this.lesvoyages.push(data)
    )
  }



}
