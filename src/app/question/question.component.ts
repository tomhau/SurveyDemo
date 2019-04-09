import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InText } from '../model/in-text';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() public actualText: InText;
  @Output() private select: EventEmitter<InText>;

  public something:string;
  constructor() {
    this.select = new EventEmitter<InText>();
   }

  ngOnInit() {
    this.something="the initial value";
    
  }

  onSelect(event){
    console.log("the button was clicked");
    this.select.emit(new InText(5,"q5","ans5","ans5",1));
  }
}
