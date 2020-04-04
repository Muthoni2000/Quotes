import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from "../quote";
import{DatePipe} from "node_modules/@angular/common"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // @Input() quote:Quote;
  //
  //   @Output() isComplete= new EventEmitter<boolean>();

  quotes = [
    new Quote(1,"Brenda Muthoni","The only way to learn a new programming language is by writing programs in it."," Dennis Ritchie",new Date(2020,5,11),0,0),
    new Quote(2,"Brenda Muthoni","The most damaging phrase in the language is.. it's always been done this way", "Grace Hopper",new Date(2019,8,3),0,0),
    new Quote(3,"Brenda Muthoni","Don't write better error messages, write code that doesn't need them.", "Jason C. McDonald",new Date(2019,3,5),0,0),
    new Quote(4,"Brenda Muthoni","The best error message is the one that never shows up.", "Thomas Fuchs",new Date(2020,9,7),0,0)
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate = new Date(quote.postedDate);
    this.quotes.push(quote)
  }

  completeQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete this techy quote by ${this.quotes[index].quoteauthor}?`)
      if(toDelete){
      this.quotes.splice(index,1)
      }
    }
  }

 // upVotes=0;
 // downVotes=0;
 // timePass=0;

 // tPassed(){this.timePass=0;}
 positive(i){
      this.quotes[i].upvotes +=1;
    }
    negative(i){
         this.quotes[i].downvotes +=1;
       }


 // initialNum:number
 // lastNum:number
 // checker:number
 //    hUpvote(){
 //      this.initialNum = 0
 //     this.lastNum = 0
 //       for(this.checker=0 ; this.checker < this.quotes.length; this.checker++) {
 //        this.lastNum = this.quotes[this.checker].uvotes;
 //        if(this.lastNum > this.initialNum){
 //          this.initialNum = this.lastNum
 //        }
 //      }
 //
 //      return  this.initialNum
 //    }
  constructor() { }

  ngOnInit() {
  }

}
