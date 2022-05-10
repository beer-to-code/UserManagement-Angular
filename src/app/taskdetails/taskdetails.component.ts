import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../service/auth/dataDetailFetch/userdata.service';
import { TaskmanipulateService } from '../service/auth/taskManipulate/taskmanipulate.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  users;
  designation: string;
  accessStatuses: string;
  location: string;
  userName:string;


  locs = [{ key: 'NOI', name: "Noida INF" },
  { key: 'BGL', name: "Banglore INF" },
  { key: 'GGN', name: "Gurugram" },
  { key: 'HYD', name: "Hydrabad LOC" }]
  constructor(private http: HttpClient, private userService: UserdataService, private taskManip: TaskmanipulateService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll() {
    this.userService.fatchAllUserData().subscribe(
      response => {
        console.log(response);
        this.users = response;
        console.log("this is from users");
        console.log(this.users);
      }
    )
  }

  statusChange(status, buttonid) {
    // console.log(status, buttonid)
    if (status === "a") {
      this.taskManip.performTask(status, buttonid).subscribe(
        response => {
          console.log(response.body);
          this.users = response.body;
          console.log(response);
        }
      );
      console.log("Approved", buttonid)
    } if (status === "r") {
      this.taskManip.performTask(status, buttonid).subscribe(
        response => {
          console.log(response);
          this.users = response.body;
          console.log(response);
        }
      ); console.log("rejected", buttonid)
    } if (status === "i") {
      this.taskManip.performTask(status, buttonid).subscribe(
        response => {
          console.log(response);
          this.users = response.body;
          console.log(response);

        }
      );
      console.log("Progress", buttonid)
    }
  }




}
