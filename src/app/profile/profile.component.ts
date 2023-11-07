import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator } from '../forbidden-name.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 // to access the query paratmeter we will  inject the activatedroute
 // service in the component
  constructor(private route:ActivatedRoute,
              private fb:FormBuilder ){}

  queryParam : any

// read the value from the query parameter
ngOnInit(): void {
  
  // this.route.queryParams.subscribe(params =>console.log(params))
 
  // this.route.queryParams.subscribe(params =>{
  //   console.log('Name = '+params['name'])
  //   console.log('Age = '+params['age'])
  //   console.log('Marks = '+params['marks'])
  // })

  this.route.queryParams.subscribe(params => this.queryParam =params)
}


// name = new FormControl()
// group= creates the group of controls
//name,email,mobile are the controls in the group
//['default value',{validators:[]]
profileForm = this.fb.group({
  pname:['',{
    validators:[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        forbiddenNameValidator(new RegExp(/amy/,'i'))
      ]}],

  pemail:['',{
    validators:[
      Validators.required,
      Validators.email]}],
  pmobile:['',{
    validators:[
      Validators.required,
      Validators.maxLength(10)]}]
})


// this method is used to get the refernce of each control in HTML
get profilecontrols(){
  return this.profileForm.controls
}

}

