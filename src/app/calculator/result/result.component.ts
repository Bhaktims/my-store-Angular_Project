import { Component, Input,OnInit,OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnChanges  {
// herw we will declare two variable
// as two values will be coming from parent component as input

  @Input()
  num1 !: number ;
  @Input()
  num2 !: number ;
  
  result = 0

  @Output()
  resultEmitter = new EventEmitter<string>();  // event emitter created

  ngOnInit(): void {   // void is function is not returning anything.
    // console.log("ng onit - result component in initalized")
    // console.log(this.num1)
    // console.log(this.num2)
    
    this.result = 0;  // here we use ngonit to intialize result value to 0
  }

  ngOnChanges():void{ // this method 
    console.log("On Changes called");
    console.log(this.num1);
    console.log(this.num2);
    this.result = this.num1 +this.num2;
    this.resultEmitter.emit("The result coming from child = "+this.result) //emitter passing the value to parent
  }

}
