import { Component, OnInit } from '@angular/core';
import { ContactrequestService } from '../service/contact/contactrequest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  contactData: string;
  statusMessage: string
  constructor(private contactservice: ContactrequestService) { }

  ngOnInit() {
  }

  submitContact() {

    console.log("i will get in touch with you ");
    console.log(this.name, this.email, this.message);
    this.contactData = this.name + "::" + this.email + "::" + this.message;
    console.log(this.contactData);
    this.contactservice.fatchUserData(this.contactData).subscribe(
      response => {
        console.log(response)
        if (response === "ACCEPTED") {
          this.statusMessage = "Thank You For Your Time...\n We Will Soon Get In Touch"
        }else{
          this.statusMessage="We are facing some technical glitch, sorry for inconvinience"
        }
      }
    )

    this.name = "";
    this.email = "";
    this.message = "";
  }
}
