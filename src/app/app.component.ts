import { Component } from '@angular/core';
import { InText } from './model/in-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizDemo';

  public actualText:InText;
  public questions: Array<InText>;
  public counter:number;

  ngOnInit():void {

    this.questions=[new InText(1,"What1?","Yes, Is A1", "No, Is B1",2),new InText(2, "What2?","Yes, Is A2", "No, Is B2",3),new InText(3,"What3?","Yes, Is A3", "No, Is B3",1)]
    this.counter = 0;
    this.actualText = this.questions[this.counter];
    
  }

  onChoise(inText:InText){
      console.log("got this answer:"+inText.answer1);
  }

  pickAnswer(event:any,n:number,index:number){
       // TODO save (push this answer to another array)
       console.log("picked this answer: "+this.questions[index].answer1); // make this correct, using number...!
  }

}
