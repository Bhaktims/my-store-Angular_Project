import { Component , OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',//component directives
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  
  constructor(private ps:ProductService){}
   
  cartCountSubscription$ ?: Subscription

  cCount = 0; // this variable is for Navbarcomponent

  cartCount$ = this.ps.cartCountSubject$ // to use aync pipe for auto subscribe/unsubscribe
  // we will declare local variable and assign it the subject/observable we want
  // to subscribe
  
  getcartCount(){
    //  this.cCount = this.ps.cartCount // here local variable is = to service variable   
  }

  ngOnInit(): void {
       
    this.cartCountSubscription$ =
       this.ps.cartCountSubject$.subscribe(count =>this.cCount = count)
        
  }

  ngOnDestroy(): void {
    this.cartCountSubscription$?.unsubscribe()
  }

  Theme = true;
  
  themeClass ={
    'bg-purple':true,
    'bg-green':false,
    }

 //function declared inside the class will not have the function keyword   
 toggleTheme(){
    // to refer any class variable inside the method/function we hv to refer it using the "this" keyword
    // ! ==> not opertor will reverse the boolean value
    
    this.themeClass = {
      'bg-purple':!this.Theme, //false   //true   //
       'bg-green':this.Theme, //true     //false
    }
    
    this.Theme = !this.Theme // will toggle the value of Theme as false, true,false
     //false   //true  // false 

  }  

  homePage(){
    console.log("Home Page link is clicked");
  }

}

//function declared outside the class should have function keyword

function someFunction(){
  alert('some function')
}
