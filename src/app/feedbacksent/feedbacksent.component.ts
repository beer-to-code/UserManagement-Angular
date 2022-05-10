import { FeedbackService } from './../service/contact/feedback.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacksent',
  templateUrl: './feedbacksent.component.html',
  styleUrls: ['./feedbacksent.component.css']
})
export class FeedbacksentComponent implements OnInit {

  constructor(private feedback:FeedbackService) { }

  feedbacks = [{ "name": "deeepsh" }, { "name": "kumar" }, { "name": "pnadey" }, { "name": "naina" }, { "name": "pnadey" }, { "name": "pnadey" }, { "name": "pnadey" }, { "name": "pnadey" }, { "name": "pnadey" }, { "name": "pnadey" }, { "name": "pnadey" },]

  feeds:any;

  ngOnInit() {
    this.showAllFeedback();
  }

  feedbackDetail(id){
    console.log(id)
  }

  showAllFeedback() {
    this.feedback.fatchAllFeedbackReverted().subscribe(
      response => {
        console.log(response);
        this.feeds = response;
        console.log("this is fromfeedback component");
        console.log(this.feeds);
      }
    )
  }
}
