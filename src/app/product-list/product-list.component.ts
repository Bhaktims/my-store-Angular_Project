import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


errorMessage =null   
ngOnInit(): void {
  this.ps.getProducts().subscribe({
    next:val=>
    {
    this.product_list = val
    this.filteredProducts = val 
},
error : err=>{
  // console.log(err)
   this.errorMessage = err
}
})
}


//Injecting the instance of the productSErvice as we want
// to use the methods and variables declared in the service class
constructor(private ps:ProductService){}

//  filterBy="TV"; // two way data binding using ng model

//  print(event:any){
//   this.filterBy = (event.target).value;
//   console.log(this.filterBy)
//  };
 showImage = true;  // two way data binding example using ngModel

 name = "product-list components"
 altText ="Image does not exist";
 titletext = "click to add to cart"
 
 imgStyle ={
  'width.px':180,
  'height.px':220,

 }

 nameStyle={
  'fontSize.px':30,
  'fontSTyle':'italic',
  'color':'blue',
  'fontVariant':'small-caps'
 }

 priceStyle ={
  'color' : 'yellowgreen'
 }

 customClass ={
  'custome-style1':true,
  'custome-style2':true
 }

 addToCart(event:MouseEvent,x : any,n ?:number){ // x is containing complete p object( product) so we can access it using . 
  //if we dont pass any value the it will pass default value ie.8
  // if we write ?: ()it will not pass an error will get undefined 
  // console.log(event.x)
  // console.log("Added to cart ",x.id + x.name + x.price );
  // console.log("Value = "+n);
  this.ps.increment() //service injection method
 }

//  searching(event:any){
//   console.log("The letter types is "+(event.target).value);
//  }

//  product ={
//    id :1,
//    name: " Samsung J7 max",
//    price : 15000,
//    desc:"Mobile Phone"
//  }

  // creating an array of the products
  
 product_list : Product[] = []
 
 /*= [
  {
    id :1,
    image:"assets/mobile.jpg",
    name: " Samsung J7 max",
    price : 15000.2368,
    discount : 0.10,
    cat:"Mobile Phone",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 1 2018 11:31:31 GMT+0530 (India Standard Time)",
    code:"M-001"
  },
  {
    id :2,
    image:"assets/Headphone.jpeg",
    name: " Boat Rockerz 400",
    price : 4500,
    discount : 0.05,
    cat:"Headphone",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 11 2020 11:31:31 GMT+0530 (India Standard Time)",
    code:"H-002"  
  },
  {
    id :3,
    image:"assets/Laptop.jpg",
    name: " HP 250",
    price : 65000.63,
    discount : 0,
    cat:"Laptop",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 5 2022 11:31:31 GMT+0530 (India Standard Time)",
    code:"L-003"
  },
  {
    id :4,
    image:"assets/TV.jpg",
    name: " LG TV",
    price : 25000,
    discount : 0.10,
    cat:"Smart TV",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 1 2023 11:31:31 GMT+0530 (India Standard Time)",
    code:"T-004"
  },
  {
    id :5,
    image:"assets/Wmachine.jpg",
    name: " Wobble",
    price : 30000,
    discount : 0.05,
    cat:"Washing Machine",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 11 2015 11:31:31 GMT+0530 (India Standard Time)",
    code:"W-005"
  },
  {
    id :6,
    image:"assets/vivomobile.jpeg",
    name: " Vivo",
    price : 22000,
    discount : 0.10,
    cat:"Mobile Phone",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate:"Wed Oct 1 2022 11:31:31 GMT+0530 (India Standard Time)",
    code:"M-006"
  },
  {
    id :7,
    image:"assets/AC.jpg",
    name: " O General",
    price : 55000,
    discount : 0.15,
    cat:"AC",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nam voluptatem laudantium. Modi vero dolore aut amet! Aliquid velit quod pariatur animi in, quas quis ea, nesciunt consectetur debitis quisquam.",
    publishedDate: "Wed Oct 11 2023 11:31:31 GMT+0530 (India Standard Time)",
    code:"A-007"
  }]*/

  filteredProducts = this.product_list  // this the copy of original product list array

  filterProduct(searchValue:string){
    this.filteredProducts = this.product_list.filter
                       (p => p.cat.toLowerCase().includes(searchValue.toLowerCase()))// applied filter on category
  }
    
  private _filterBy = ' '

  // we will not bind _filter wt the ng model, we will bind filter method name wt ngModel

  get filterBy(): string{   // used to read the value of the _filter variable
    // console.log("getter")
    return this._filterBy
  }

  set filterBy(value:string){  // used to set/change the value of the _filter varible with t input value
    // console.log("setter") 
    this._filterBy = value
    this.filterProduct(this._filterBy)
  }

}

