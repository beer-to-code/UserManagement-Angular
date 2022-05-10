import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {


  transform(value: any, filterBy: any) {
    if(value){
      return value.filter((data:any)=>data.postType===filterBy)
    }
  }

}
