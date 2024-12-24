import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { CONFIG } from '../../../../../config';
import { NgIf } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-password',
  imports: [NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  
  passwordForm: FormGroup;
  oldPasswordVisible = false;
  newPasswordVisible = false;
  confirmPasswordVisible = false;

  toggleOldPasswordVisibility(): void {
    this.oldPasswordVisible = !this.oldPasswordVisible;
  }

  toggleNewPasswordVisibility(): void {
    this.newPasswordVisible = !this.newPasswordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      return { passwordMismatch: true }; 
    }
  
    return null; 
  }
  
  
  constructor(private formBuilder: FormBuilder , private toaster: ToastrService ,private apiService: ApiService,) {
   this.passwordForm = this.formBuilder.group(
     {
       oldPassword: ['', [Validators.required, Validators.minLength(6)]],
       newPassword: ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
     },
     { validators: this.passwordMatchValidator }
   );
 }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      const payload = {
        oldPassword: this.passwordForm.value.oldPassword,
        newPassword: this.passwordForm.value.newPassword,
      };
  
      this.apiService.getchangePassword(payload).subscribe({
        next: (response) => {
          this.toaster.success('Password changed successfully!', 'Success');
          this.passwordForm.reset();
        },
        error: (err) => {
          this.toaster.error(err.error?.message || 'Failed to change password.', 'Error');
        },
      });
    } else {
      this.toaster.error('Please fill in the form correctly.', 'Error');
    }
  }
  

  form: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  }







