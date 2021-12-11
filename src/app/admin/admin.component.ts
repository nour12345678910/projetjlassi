import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AgenceService } from '../agence.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

productForm=new FormGroup({
    login:new FormControl(''),
    password:new FormControl(''),
  });
    v:Voyage;

    onSubmit()
    {
      console.log(this.productForm.value);
      console.log(this.productForm.value['login']);
      console.log(this.productForm.value['password']);
     
      this.agenceService.addvoyage(this.v);
    }
    constructor(private fb:FormBuilder,private agenceService:AgenceService) { }
personneForm:FormGroup;
  ngOnInit(): void {
    this.personneForm=this.fb.group(
      {
        
        login:['login'],
       password:['password']
      }
      )
    }

    isvalidlogin():boolean{
      return this.productForm.controls['login'].errors?.['pattern']&&
      this.productForm.controls['login'].dirty ;
      }

      isvalidpassword():boolean{
        return this.productForm.controls['password'].errors?.['pattern']&&
        this.productForm.controls['password'].dirty ;
        }

}

