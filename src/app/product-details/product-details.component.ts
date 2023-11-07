import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  //to acess the dynaic path variable we will inject the activatedRoute service in the component

  constructor(private route:ActivatedRoute,
              private ps:ProductService,
              private router:Router){}
 
  product !:Product 
  id !: number
  productCount !:number


  ngOnInit(): void {
    // let id =Number(this.route.snapshot.paramMap.get('id'))
    // this.ps.getProductById(id).subscribe(p=>this.product = p)
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'))
      this.ps.getProductById(this.id).subscribe(p=>this.product=p)
    })
    this.ps.getProducts().subscribe(p=>this.productCount = p.length);

  }

  goBack(){
      this.router.navigate(['./products']);
  }

  goPrevious(){
    this.id--;
    if(this.id < 1)
        this.id = this.productCount
    this.router.navigate(['./products',this.id])
  }

  goNext(){
    this.id++;
    if(this.id > this.productCount)
        this.id = 1
    this.router.navigate(['./products',this.id])
  }


}
