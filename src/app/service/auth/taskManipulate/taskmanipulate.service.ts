import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserdataService } from '../dataDetailFetch/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class TaskmanipulateService {

  constructor(private http: HttpClient,private userdata:UserdataService) { }

  performTask(taskCode,id){
    console.log("performtask()")
    return this.http.post(`http://localhost:8080/task/${taskCode}/${id}`, `${taskCode}`, { observe: 'response' });
    // return this.userdata.fatchAllUserData()

  }




}
