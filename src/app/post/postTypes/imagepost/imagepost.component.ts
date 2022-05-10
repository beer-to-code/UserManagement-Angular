import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit,Pipe } from '@angular/core';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-imagepost',
  templateUrl: './imagepost.component.html',
  styleUrls: ['./imagepost.component.css']
})
export class ImagepostComponent implements OnInit {

  messages="Please Select a Post type ..."
  catagory:"any";
  data={"car":["honda","civic","ciaz"],"art":["art1","art2","art3"],"girls":["g1","g2","g3"],"boys":["boy1","boy2","boy3"]
  }
  postData:any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.catagory = this.route.snapshot.params['catagory'];
    this.route.params.subscribe((params: Params) => {
      // console.log(params,"this is from imagepost")
      this.catagory=params['catagory'];
      // console.log(this.route.snapshot)
      // console.log(this.data)
    }
    )
    this.postData=GlobalComponent.postDataAll
    // console.log(GlobalComponent.postDataAll);
  }



}
