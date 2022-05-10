import { UserdataService } from './../service/auth/dataDetailFetch/userdata.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../service/auth/userAuth/userauth.service';
import { GlobalComponent } from '../global-component';
import { TopnavbarComponent } from '../topnavbar/topnavbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName = '';
  password = '';
  // static counter=4; 
  invalidLogin = false;


  constructor(private authService: UserauthService, private userDataService: UserdataService, private router: Router) {
    this.invalidLogin = false;
  }

  ngOnInit() {
  }

  getLoggedInUserData() {
    console.log("function calls to get data about user.")
    this.userDataService.fatchUserData(this.userName).subscribe(
      response => {
        // console.log(response);
        // console.log(GlobalComponent.userData);
        // console.log("userData added");
        GlobalComponent.userData = response;
        // console.log(GlobalComponent.userData.access);
        // console.log(GlobalComponent.userData);
        if (GlobalComponent.userData.access === "DENY") {
          // console.log("deny mil gya")
          sessionStorage.setItem("loginAccess","DENY");
          // GlobalComponent.accessPermission = false;
        }
      }
    )
  }

  handleLogin() {
    console.log("login call", this.userName)
    this.authService.authUser(this.userName, this.password).subscribe(
      response => {
        console.log(response,response.body, response.status, "this one ");
        if (response.body === "OK") {
          console.log("navigated", this.userName);
          sessionStorage.setItem("acctype", "1");
          sessionStorage.setItem("authenticatedUser", this.userName);
          this.router.navigate(['welcome', this.userName]);
          GlobalComponent.loggedInUserName = this.userName.toUpperCase();
          this.invalidLogin = false;
          this.getLoggedInUserData();
        }else if(response.body==="CONTINUE"){
          //admin Login

          console.log("navigated", this.userName);
          sessionStorage.setItem("acctype", "0");
          sessionStorage.setItem("authenticatedUser", this.userName);
          this.router.navigate(['welcome', this.userName]);
          GlobalComponent.loggedInUserName = this.userName.toUpperCase();
          this.invalidLogin = false;
          this.getLoggedInUserData();
        }
        else if(response.body==="CHECKPOINT"){
          console.log("proccess Pending")
          sessionStorage.setItem("acctype", "-1");
          this.router.navigate(['requestpending']);
        }
        else if (response.body === "BAD_REQUEST") {
          this.invalidLogin = true;
          console.log(response.status)
        } else {
          console.log("invalid login", this.invalidLogin);
        }
      })
  }



}
