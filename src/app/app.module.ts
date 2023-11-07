import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceChrPipe } from './replace-chr.pipe';
import { DiscountedpricePipe } from './discountedprice.pipe';
import { HighlightDirective } from './highlight.directive';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './calculator/result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component'
import { RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component'


// ** - wild card to specify any other URL // router sequence is importatnt static dynamic empty and wild
const Routes:Routes = [
  {path:"home",component:HomeComponent,title:"My-Store | Home"},
  {path:"products",component:ProductListComponent,title:"My-Store | Products" },
  {path:"calculator",component:CalculatorComponent,title:"My-Store | Calculator" },
  {path:"profile",component:ProfileComponent,title:"My-Store | Profile" },
  {path:"products/:id",component:ProductDetailsComponent,title:"My-Store | Product Details",
   children:[
    {
      path:"review",
      component:ReviewComponent,
      title:"Review"
    }
   ]},  // dynamic path & children path
  
  

  // {path:"",component:HomeComponent}, // empty path ex-1
  {path:"",redirectTo:"/products",pathMatch:'full'}, // empty path redirecting to another path
  {path:"**",component:PageNotFoundComponent,title:"My-Store| No Page"} // wildcard path
]



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ReplaceChrPipe,
    DiscountedpricePipe,
    HighlightDirective,
    CalculatorComponent,
    ResultComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//1 t component loaded when we application get start
})
export class AppModule { }
