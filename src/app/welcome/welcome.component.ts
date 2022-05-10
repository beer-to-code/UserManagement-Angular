import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { buttonDirective } from '../directives/button.directive';
import { UserdataService } from '../service/auth/dataDetailFetch/userdata.service';
import { UserauthService } from '../service/auth/userAuth/userauth.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  acctype = this.authService.isAccType();
  postType=[{name:'Pictorial',id:1},{name:'Textual',id:2},{name:'Technical',id:3},{name:'PortFolio',id:4}]
  constructor(private userdata: UserdataService, private route: ActivatedRoute, private router: Router, private authService: UserauthService) { }

  ngOnInit() {


    console.log(this.route.snapshot)
    console.log(this.acctype)
    this.userdata.fatchAllUserData().subscribe(
      response => {
        console.log(response);
      }
    )
  }

  postTypeClicked(id) {
    console.log(id)
    if(id==1){
      this.router.navigate(['images'],{relativeTo:this.route})
    }if(id==2){
      this.router.navigate(['./text'],{relativeTo:this.route})
    }if(id==3){
      this.router.navigate(['./technical'],{relativeTo:this.route})
    }if(id==4){
      this.router.navigate(['./portfolio'],{relativeTo:this.route})
    }if(id==5){
      this.router.navigate(['test'],{relativeTo:this.route})
    }
    // this.router.navigate(['images'],{relativeTo:this.router})
  }


}
