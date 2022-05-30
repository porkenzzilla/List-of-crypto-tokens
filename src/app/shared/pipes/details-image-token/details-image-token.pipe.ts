import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDetailsImageToken'
})
export class DetailsImageTokenPipe implements PipeTransform {

  transform(imageUrl: string): string {
    if(imageUrl.includes('./../../assets/tokens/')) {
     return `../.${imageUrl}`;
    }
    return imageUrl;
  }

}
