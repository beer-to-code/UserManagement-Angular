import { GlobalComponent } from './../../../global-component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Body } from '@angular/http/src/body';


@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  requestBody: string


  constructor(private http: HttpClient) { }

  allowAccess() {
    let accessPermission = GlobalComponent.userData.access
    console.log("this is allowAccess check return",(accessPermission ==="GRANT"));
    return (accessPermission ==="GRANT")
  }


  isLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }

  isAccType(){
    let userType = sessionStorage.getItem("acctype")
    return userType;
  }

  removeUser() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("acctype");
  }








  authUser(userName, pass) {
    console.log("before: ", this.isLoggedIn())
    // console.log(`${userName}:${pass}`)
    return this.http.post("http://localhost:8080/login/user/authenticate", `${userName}:${pass}`, { observe: 'response' })
  }








  userSignupRequest(userName: string, emailId: string, fName: string, lName: string, location: string, pass: string, phone: string) {
    console.log("call for signup api request ")
    this.requestBody = userName + ":" + emailId + ":" + fName + ":" + lName + ":" + location + ":" + pass + ":" + phone
    console.log(this.requestBody);
    return this.http.put(`http://localhost:8080/signup/user/${userName}`, this.requestBody);

  }

  userCanLogin(userName) {
    return this.http.post(`http://localhost:8080/login/user/accessStatus`, `${userName}`);
  }
}
