import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-recherchevoyage',
  templateUrl: './recherchevoyage.component.html',
  styleUrls: ['./recherchevoyage.component.css']
})
export class RecherchevoyageComponent implements OnInit {

  voyageForm:FormGroup=new FormGroup({});

  constructor(private agenceService:AgenceService,private fb:FormBuilder) { }
  lesvoyages:Voyage[]=[];
  ngOnInit(): void {
    this.voyageForm=this.fb.group({
      nom:[''],
      prix:[0],
      enpromotion:[false]
    })
    this.agenceService.getvoyages()
    .subscribe(data=>this.lesvoyages=data)
  }

  onSubmit(){
    this.agenceService.addvoyage(this.voyageForm.value)
    .subscribe(data => this.lesvoyages.push(data)
    )
  }

  onSupprimer(id:number){
    this.agenceService.deletevoyage(id)
    .subscribe(
    ()=>this.lesvoyages=this.lesvoyages.filter(v => v.id != id)

    )
  }

  onModifier(id:number){
    this.agenceService.updatevoyage(id, this.voyageForm.value)
    .subscribe(
voyage => {
  let pos=this.lesvoyages.findIndex(v=> v.id == voyage.id)
  this.lesvoyages[pos]=voyage
}
    )
}


}
