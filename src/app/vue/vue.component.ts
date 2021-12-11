import { Component, Input, OnInit } from '@angular/core';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.css']
})
export class VueComponent implements OnInit {

  constructor() { }
@Input() voyage:Voyage=new Voyage();
  ngOnInit(): void {
  }

}
