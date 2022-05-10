import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }
  fatchUserData(userName) {
    // console.log(`${userName}:${pass}`)
    return this.http.get(`http://localhost:8080/user/getUserData/${userName}`);
  }

  fatchAllUserData() {
    // console.log(`${userName}:${pass}`)
    return this.http.get(`http://localhost:8080/test/All`);
  }




}
