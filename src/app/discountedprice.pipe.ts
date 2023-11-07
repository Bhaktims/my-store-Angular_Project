import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedprice'
})
export class DiscountedpricePipe implements PipeTransform {

  transform(price: number,discount:number): number {
    return price-(price*discount);   //15000-(15000*10/100)
  }

}
