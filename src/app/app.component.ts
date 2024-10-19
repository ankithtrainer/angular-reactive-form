import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      // Define your form controls here
      firstName: new FormControl('Promod'),
      lastName: new FormControl('Rai'),
      email: new FormControl('promodrai@gmail.com')
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.myForm.value);
  }
}