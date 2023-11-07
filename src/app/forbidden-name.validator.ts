import { AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


//this function will return either null or validation error
//if it return null,that means the name is valid
// if it return validation error, tht mns the name is not valid
export function forbiddenNameValidator (forbiddenName:RegExp):ValidatorFn{
    return(control:AbstractControl): ValidationErrors | null =>{
      let val = control.value // assigning the value of the  name textbox to variable val
      if (forbiddenName.test(val))
          return { forbidden : control.value }
      else
          return null 
    }  
}