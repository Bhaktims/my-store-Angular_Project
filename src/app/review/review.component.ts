import { Component } from '@angular/core';
import { review } from './review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  reviewForm = new review()

  submitForm(){
    console.log('Form Submiteed'+ this.reviewForm.author)
  }
}
