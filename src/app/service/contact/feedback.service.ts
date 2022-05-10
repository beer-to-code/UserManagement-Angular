import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  fatchAllFeedbackReverted() {
    return this.http.get(`http://localhost:8080/contact/get/feedback/reverted`);  }
  

  constructor(private http:HttpClient) { }


  fatchAllFeedback() {
    console.log("fetching api dat")
    return this.http.get(`http://localhost:8080/contact/get/feedback`);
    // return this.http.get(`http://localhost:8080/contact/request/${name}/${email}}/${message}`);
    // return this.http.get(`http://localhost:8080/contact/request/${name}/${email}}/${message}`, { observe: 'response' });
  }

  sendFeedback(msg,id){
    return this.http.post(`http://localhost:8080/contact/put/feedback/${id}`,`${msg}`)
  }
  
}
