import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChr'
})
export class ReplaceChrPipe implements PipeTransform {

  // transform(value: string): string {       // option 1
  //   return value.replace('-','#');
  // }

  
  transform(value: string,replaceWith : string): string {    // option 2
    return value.replace('-',replaceWith);
  }

}
