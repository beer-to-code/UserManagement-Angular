import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postsection',
  templateUrl: './postsection.component.html',
  styleUrls: ['./postsection.component.css']
})
export class PostsectionComponent implements OnInit {
  
  postType='any';
  messageNote="Please Select A Catagory"
  constructor(private route:ActivatedRoute) { }


  ngOnInit() {
    // console.log(this.route.snapshot.params['imagepost'])
    this.route.params.subscribe((param:Params)=>{
      this.postType=param['imagepost'];
      console.log(this.postType);
      if(this.postType==='images'){ 
        console.log ("images will be displayed")
      } if(this.postType==='text'){
        console.log ("text will be displayed")
      } if(this.postType==='technical'){
        console.log ("technical will be displayed")
      } if(this.postType==='portfolio'){
        console.log ("portfolio will be displayed")
      }

    })
  }

}
