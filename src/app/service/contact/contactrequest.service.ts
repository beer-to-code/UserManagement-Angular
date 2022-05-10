import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactrequestService {

  constructor(private http: HttpClient) { }
  fatchUserData(rbody) {
    // console.log(`${userName}:${pass}`)
    return this.http.post('http://localhost:8080/contact/request',`${rbody}`);
  }
}
