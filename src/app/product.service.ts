import { Injectable } from '@angular/core';
import { of,from,range, Observable,pipe,filter,map, delay, count,interval, Subscription, Subject, BehaviorSubject, retry, concatMapTo, throwError, catchError } from 'rxjs';
import { HttpClient , HttpErrorResponse } from '@angular/common/http'
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  appName = 'my-store'

   add(a:number,b:number):number{
    return a + b ;
   }

   cartCount = 0
    
  //the next value of the subject will be updated when user click on the add to cart button
  // the variable whose tht is displayed in the badge will subscribe to the subject
  cartCountSubject$ = new BehaviorSubject<number>(0)
   // to set intial value at 0 we r using behaviour subject
   
   increment(){
    this.cartCount++ // incrementing 
    // that will increment the value of the variable by 1 
    this.cartCountSubject$.next(this.cartCount)
   }

/////////////////////RX-JS////////////////////////////////////////////

  values$ = of(1,2,3,"bhakti","anmay",[8,9,6,3],true) // observable
  colors = ['red','white','green','black','blue']
  colors$ = from(this.colors)
  chr$=from(['a','b','c','d'])
  range$ = range(1,10)

  //custom Observables
  myObservalble$ = new Observable(observe =>{
    observe.next(10)
    observe.next(20)
    observe.next(30)
    observe.next(true)
    observe.complete()  // if we want to declare onlu 1 st 3 values then we can use complete
    observe.next('observable')
  })

  myNumbers$=of(1,2,9,6,8,3,99,88,66,45,82)

  //interval opertor creates an observable which emits the values after the specified mSec
  myinterval$ = interval(2000)

  sub1$ ?: Subscription // assigning subsc$ varaible as subscription. becoz if we wnt use unsubscription then we fisrt hv to save those values
  sub2$ ?: Subscription

  mySubject$ = new Subject<number>()   // subject declration 



  constructor(private http: HttpClient ) {
    // in the subscribe method we will specify what is do be done on individual value 
    // of the observable stream
    // this.values$.subscribe(val =>console.log(" value$ ="+val))   // va;l is user define variable 
    // this.colors$.subscribe(col=>console.log(col))
    // this.range$.subscribe(r =>console.log(r))
    // this.chr$.subscribe(ch=>console.log(ch))

    // we can subscribe to observable multiple times
    // this.myObservalble$.subscribe(x => console.log("next1 "+x))
    // this.myObservalble$.subscribe(x => console.log("next2 "+x))  
  
     // to capture the complete stage of the observable
    //  this.myObservalble$.subscribe({
    //   next:val => console.log(val),
    //   complete:()=>console.log("observable complete")
    //  })

     // pipable opertor
     // to filter the values first we apply the pipable operator on the observable
     // this pipable operator will return a new observable wt t change
     // and then we can subscribe to this new observable

    //  this.myNumbers$.pipe(filter(val => val % 2 == 0))
                    // .subscribe(val =>console.log(val)) 
  
        // this.myNumbers$.pipe(map(val => val*val*val))
        //                .subscribe(val => console.log(val))  // map opertor takes each single valu do the operation and gv o/p            
     
        // delay funct will delay the observable by specified mSec
        // this.myNumbers$.pipe(map(val => val*val*val),delay(5000))
        //                .subscribe(val => console.log(val))

        //count function - gives only count tht how values are odd
        // this.myNumbers$.pipe(count(val => val % 2 != 0))
        //             .subscribe(val =>console.log(val))
      
        //  this.myinterval$.subscribe(val =>console.log("1 :"+val))
        //  this.myinterval$.subscribe(val =>console.log("2 :"+val)) // here will get number count simulteneously for both subscription continously
  
      //  this.sub1$ = this.myinterval$.subscribe(val =>console.log("1 :"+val))
      //  this.sub2$ = this.myinterval$.subscribe(val =>console.log("2 :"+val))
  
      // /// setTimeout is JS function which is used to perform some fixed task after specified time in mSec
      // setTimeout(()=> {
      //   this.sub1$?.unsubscribe()
      //   this.sub2$?.unsubscribe()
      //    }, 10000)
      
      this.mySubject$.next(5);
      this.mySubject$.next(10);
      // the value generated before subscription will not be available to the subscriber
      
      this.mySubject$.subscribe(val => console.log("A -"+val))  // a will get 20,30,40,50
      this.mySubject$.next(20)
      this.mySubject$.next(30)

      this.mySubject$.subscribe(val => console.log("B -"+val)) // b will get only 40,50 
      this.mySubject$.next(40)
      this.mySubject$.next(50)

    } 
   //this function is used to get all the products from the json server
    // frontend server requesting backend server for DB using URL
    getProducts() : Observable<Product[]>{
       return this.http.get<Product[]>("http://localhost:3000/products")
                    .pipe(catchError(this.handleError))
    }

   //this function is used to get single/individual product from the json server
   getProductById(id:number):Observable<Product>{
           return this.http.get<Product>("http://localhost:3000/products/"+id)
           .pipe(catchError(this.handleError))           
   }


   // this method called if there is an error in the URL
    handleError(error : HttpErrorResponse){
      console.log("Error occured")
      return  throwError (()=> 'Some Error Occured,Please try after sometime' )
    }

}
