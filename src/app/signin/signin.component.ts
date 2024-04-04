import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  onSubmit() {
    
    //console.warn(this.signinForm.value);
    console.log("You Entered Username: ", 
      this.signinForm.controls['username'].value, 
      "and password: ", this.signinForm.controls['password'].value)

    alert("You Entered Username: "+ 
    this.signinForm.controls['username'].value+ 
    " and password: "+ this.signinForm.controls['password'].value)
    
  };

};
