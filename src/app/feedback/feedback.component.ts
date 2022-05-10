import { FeedbackService } from './../service/contact/feedback.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {

  name: string;
  email: string;
  message: string;
  warning:string;
  contacts: any;
  feedBack: string;
  constructor(private feedback: FeedbackService) { }

  ngOnInit() {
    console.log("initiated")
    this.showAllFeedback();
  }

  ngOnDestroy(): void {
    console.log("destroyed")
  }

  showAllFeedback() {
    this.feedback.fatchAllFeedback().subscribe(
      response => {
        console.log(response);
        this.contacts = response;
        console.log("this is fromfeedback component");
        console.log(this.contacts);
      }
    )
  }

  sendFeed(feed, id, email) {
    console.log(feed, id)
    if (feed == undefined || feed.length < 10 ) {
      console.log("not falid");

    } else {
      this.feedback.sendFeedback(feed, id).subscribe(
        response => {
          console.log(response, email);
          this.contacts = response;
          this.warning="Feedback Sent On "+email;
        }
      )
    }


  }

}
