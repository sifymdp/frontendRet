import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class OtpVerificationPage implements OnInit {
  otpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  focusNext(event: any, nextInput: string): void {
    const maxLength = event.target.maxLength;
    const currentLength = event.target.value.length;
  
    if (currentLength === maxLength) {
      const nextElement = document.getElementsByName(nextInput)[0];
      if (nextElement) {
        nextElement.focus();
      }
    }
  }

  

  onSubmitOtp() {
    if (this.otpForm.valid) {
      console.log('OTP Verified:', this.otpForm.value.otp);
    } else {
      console.log('Invalid OTP');
    }
  }
}