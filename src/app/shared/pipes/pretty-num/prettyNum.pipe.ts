import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyNum'
})
export class PrettyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
      let round: number= Math.round(value);
      let length: number = String(round).length;
    if(value === 0){
       return '0'
    }
      if(length >= 4 && length <= 6) {
        let shortNumT: number = value / Math.pow(10, 3);
        return shortNumT + ' Thousand';
      }
      if(length >= 7 && length <= 9){
          let shortNumM: number = value / Math.pow(10, 6);
          return shortNumM.toFixed(3) + ' Million';
      }
      if(length >= 10){
          let shortNumB: number = value / Math.pow(10, 9);
          return shortNumB.toFixed(3) + ' Billion'; 
        }
      else{
        return value.toFixed(3)
      }
  }
}
