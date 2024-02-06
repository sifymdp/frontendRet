import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.page.html',
  styleUrls: ['./feedback-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, MenuComponent]
})
export class FeedbackEditPage {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      profileImage: [''], // For storing the selected image
    });
  }

  // Function to handle form submission
  onRegister() {
    // Access form values using this.registerForm.value
    console.log('Form submitted:', this.registerForm.value);


}}

