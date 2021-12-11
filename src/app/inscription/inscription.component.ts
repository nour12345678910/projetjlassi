import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';
import { Voyageur } from '../voyageur';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private fb:FormBuilder,private agenceService:AgenceService) { }
  personneForm:FormGroup;

  ngOnInit(): void {this.personneForm=this.fb.group(
  {
    nom:[],
   prenom:[],
   age:[],
   datenaissance:[],
   mail:[],
   numtel:[],
   adresse:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
   ville:[]})} 
productForm=new FormGroup({
nom:new FormControl(''),
prenom:new FormControl(''),
age:new FormControl(''),
datenaissance:new FormControl(''),
mail:new FormControl(''),
numtel:new FormControl(''),
adresse:new FormControl(''),
ville:new FormControl(''),

});
onSubmit()
{
  console.log(this.productForm.value);
  console.log(this.productForm.value['nom']);
  console.log(this.productForm.value['prenom']);
  console.log(this.productForm.value['age']);
  console.log(this.productForm.value['datenaissance']);
  console.log(this.productForm.value['mail']);
  console.log(this.productForm.value['numtel']);
  console.log(this.productForm.value['adresse']);
  console.log(this.productForm.value['ville']);
}
reset()
{
this.productForm.reset();
}
isvalidpattern():boolean{
return this.productForm.controls['nom'].errors?.['pattern']&&
this.productForm.controls['nom'].dirty ;
}
isobligatoire():boolean{
return this.productForm.controls['nom'].errors?.['required']&&
this.productForm.controls['nom'].dirty;
}

isobli():boolean{
  return this.productForm.controls['mail'].errors?.['required']&&
  this.productForm.controls['mail'].dirty;
  }
  isValidnumtel():boolean{
    return this.productForm.get('numtel')?.errors?.maxlength &&
this.productForm.controls['numtel'].touched;
    }



villes:string[]=['Tunis','Ariana','Ben Arous','Beja','Bizerte','Gabes','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','La Kef','Mahdia','Mannouba','Medenine','Monastir','Nabeul','sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Zaghouan']


destinations:string[]=[
  'Istanbul(Turquie)','Madrid(Espagne)','Belgrade(Serbie)','Sharm el sheikh(Caire)','Antalya(Turquie)','Cancun(Mexique)','iles Maldives(Maldives)','iles Maurices(Maurice)','Seychelles(Seychelles)']

  


}