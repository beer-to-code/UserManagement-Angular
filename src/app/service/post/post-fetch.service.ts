import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostFetchService {

  constructor(private http:HttpClient) { }

  fetchAllPost(){
    return this.http.get('http://localhost:8080/post/All');
  }

}
