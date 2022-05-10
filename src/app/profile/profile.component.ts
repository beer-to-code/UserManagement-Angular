import { TopnavbarComponent } from './../topnavbar/topnavbar.component';
import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { GlobalComponent } from '../global-component';
import { UserauthService } from '../service/auth/userAuth/userauth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allowEdit = false;
  userData = GlobalComponent.userData;
  Name: string;
  Position : string;
  Location : string;
  //users=[{Name:GlobalComponent.userData.userName},{Name:GlobalComponent.userData.position},{Name:GlobalComponent.userData.location}]

  // userName=GlobalComponent.userData["userName"]
  constructor(
    private authService: UserauthService,
    private router: Router,
    // private topnav:TopnavbarComponent

  ) {


  }

  ngOnInit() {
    console.log(GlobalComponent.userData);
       
    this.Name=GlobalComponent.userData.userName;
    this.Position=GlobalComponent.userData.p;
    this.Name=GlobalComponent.userData.userName;
    this.Position=GlobalComponent.userData.designation;
    this.Location=GlobalComponent.userData.location;
    
  }

  update() {
    this.ngOnInit();
}

  allowEdits() {
    console.log(this.allowEdit);
    this.allowEdit = this.allowEdit ? false : true
  }

  getDataFromLocal() {
    console.log("on profile icon click getDataFromLocal");
    console.log(GlobalComponent.userData);
  }

  logout() {
    this.authService.removeUser();
    this.router.navigate(['login']);
    console.log("logged out !!!");
    
    return false;
  }

}
