import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../service/auth/userAuth/userauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName: ''
  emailId: ''
  fName: ''
  lName: ''
  password:''
  phone: string
  message:string
  requested= false
  
  locations = [{ key: 'NOI', name: "Noida INF" },
  { key: 'BGL', name: "Banglore INF" },
  { key: 'GGN', name: "Gurugram" },
  {key:'HYD',name:"Hydrabad LOC"}]
  selectedValue: null

  constructor(private authService: UserauthService, private router: Router) { }

  ngOnInit() {
  }


  handleSignup(){
    this.authService.userSignupRequest(this.userName,this.emailId,this.fName,this.lName,this.selectedValue,this.password,this.phone).subscribe(
      response=>{
        console.log(response)
        if(response==="OK"){
          this.router.navigate(['login'])

        }
      }
    )
  }

}
