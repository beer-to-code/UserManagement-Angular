import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserauthService } from '../service/auth/userAuth/userauth.service';
import { GlobalComponent } from '../global-component';
import { UserdataService } from '../service/auth/dataDetailFetch/userdata.service';
import { PostFetchService } from '../service/post/post-fetch.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit,OnChanges {


  userName = ''
  password = ''
  name= ""

  message = "some message"
  userDataFetched = GlobalComponent.loggedInUserName;
  isUser: boolean = this.authService.isLoggedIn();
  accessPermission: boolean =true;
  acctype=this.authService.isAccType();

  //  GlobalComponent.accessPermission
  // accessPermission:boolean =GlobalComponent.userData.access?true:false;

  data = {}

  constructor(private route: ActivatedRoute, private authService: UserauthService, private userData: UserdataService,private router:Router,private postService:PostFetchService) { }
  
  ngOnInit() {
   this.getpostAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  userLogout() {
    this.isUser = false;
  }

  getUserProfileData() {
    console.log("this is fromhere",this.isUser,this.acctype)

    this.accessPermission = GlobalComponent.userData.access==="DENY" ? true : false; 
    if (this.accessPermission) {
      console.log("permitted")
      console.log(this.accessPermission)
    }
    else {
      console.log("denied")
      console.log(this.accessPermission)

    }
    console.log("user profile icon clicked ()")
    console.log(GlobalComponent.userData);
  }

  showTask() {
    console.log("task clicked")
  }
  getpostAll(){
    this.postService.fetchAllPost().subscribe(
      response=>{
        // console.log(response);
        GlobalComponent.postDataAll=response;
      }
    )
  }
  showHome(){
    console.log("showHome()",this.userName,this.userDataFetched)
    this.getpostAll();
    this.router.navigate(['welcome',"user"]);
    // console.log(GlobalComponent.postDataAll['id'])



  }

 
}
