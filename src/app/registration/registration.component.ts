import { Component } from '@angular/core';
import {  FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registrationForm: FormGroup
  isSubmitting = false
  toast = { visible: false, title: "", description: "" }

  positions = [
    { value: "goalkeeper", label: "Goalkeeper" },
    { value: "defender", label: "Defender" },
    { value: "midfielder", label: "Midfielder" },
    { value: "forward", label: "Forward" },
    { value: "coach", label: "Coach" },
  ]

  experienceLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "amateur", label: "Amateur" },
    { value: "semi-professional", label: "Semi-Professional" },
    { value: "professional", label: "Professional" },
  ]

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      position: ["", Validators.required],
      experience: ["", Validators.required],
      bio: ["", Validators.maxLength(500)],
    })
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registrationForm.controls).forEach((key) => {
        const control = this.registrationForm.get(key)
        control?.markAsTouched()
      })
      return
    }

    this.isSubmitting = true

    // Simulate API call
    setTimeout(() => {
      console.log(this.registrationForm.value)
      this.showToast("Registration Successful!", "Thank you for registering with FootballHub.")
      this.isSubmitting = false
      this.registrationForm.reset()
    }, 1500)
  }

  showToast(title: string, description: string) {
    this.toast = { visible: true, title, description }

    // Hide toast after 3 seconds
    setTimeout(() => {
      this.toast = { visible: false, title: "", description: "" }
    }, 3000)
  }

  // Helper methods for form validation
  get fullName() {
    return this.registrationForm.get("fullName")
  }
  get email() {
    return this.registrationForm.get("email")
  }
  get age() {
    return this.registrationForm.get("age")
  }
  get position() {
    return this.registrationForm.get("position")
  }
  get experience() {
    return this.registrationForm.get("experience")
  }
  get bio() {
    return this.registrationForm.get("bio")
  }
}
