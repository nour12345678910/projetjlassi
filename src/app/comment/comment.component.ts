import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input() comment:Commentaire=new Commentaire();
  constructor() { }

  ngOnInit(): void {
  }

}
