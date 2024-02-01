import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage  {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      pinCode: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      alternateMobileNumber: ['', Validators.pattern('^\\d{10}$')],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      // Perform registration logic here
      // You can access the form values using this.registerForm.value
      console.log('Registration successful!', this.registerForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
