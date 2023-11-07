import { Component,OnInit } from '@angular/core';
import { Sample } from './sample';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {

  // ps:Productservice ==> ps = new ProductService()
  // Here we are inject the instance of the service class  
  // private or public access can be given to ps to access
  
  constructor(private ps:ProductService){}



  title = 'my-store';

  colors = ['red','yellow','pink','black','white','orange','blue']
  
  age  = 33
  

  // when we declare variables inside the method we use let,var or const keyword
  ngOnInit(): void {
    let s = new Sample  //using new keyword we are creating the object/instance of the sample class
    console.log(s.getmessage()) // now we will call the method using the variable that contains the instance of the sample class
    console.log("From the service class "+this.ps.appName)
    console.log("sum = " +this.ps.add(12,85))
  }

  
  




}
