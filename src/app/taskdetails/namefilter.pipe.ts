import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(value: any, filterstring: string,propItem:string): any {
    if(value.length===0){
      return value;
    }
    for (const item of value){
      const resultArray=[];
      if(item[propItem]===filterstring){
        resultArray.push(item);
      }
      console.log("this is resultArray")
      console.log(resultArray)
      return resultArray;

    }
  }

}
