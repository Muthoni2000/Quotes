import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from "src/app/quote"

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete= new  EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}


