import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/auth/dataDetailFetch/userdata.service';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {

  users;

  constructor(private http: HttpClient, private userService: UserdataService) { }

  ngOnInit() {
  this.showAll();
  }

  showAll() {
    this.userService.fatchAllUserData().subscribe(
      response=>{
        console.log(response);
        this.users=response;
        console.log("this is from users");
        console.log(this.users);
      }
    )
  }

  statusChange(status,buttonid){
    console.log(status,buttonid)
    if(status==="a"){
      console.log("Approved",buttonid)
    }if(status==="r"){
      console.log("rejected",buttonid)
    }if(status==="i"){
      console.log("Progress",buttonid)
    }
  }


}
