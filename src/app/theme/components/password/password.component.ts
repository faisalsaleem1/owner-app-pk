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
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }
  
  onSubmit(): void {
    if (this.passwordForm.valid) {
      console.log('Form submitted:', this.passwordForm.value);
    }
  }

  

  // hideAllFieldsError: any;
  // applyTransition = false;
  // NEewPassTransition = false;
  // RepeatpassTransition = false;
  // oldPassword: any;
  // newPassword: any;
  // confirmNewPassword: any;
  // // submitted: any;
  // errorMessage: any;
  // emptyOldPass: boolean = false;
  // checkSubmitClicked: boolean = false;
  // oldPasswordInputData: string = '';
  // counter = 0;
  // submitted: boolean = false;
  // isFormSubmitted: boolean = true;

  form: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
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

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group(
  //     {
  //       oldPassword: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(15),
  //         ],
  //       ],
  //       password: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(15),
  //         ],
  //       ],
  //       confirmPassword: ['', Validators.required],

  //     },
  //     {
  //       // validators: [Validation.match('password', 'confirmPassword')],
  //     }
  //   );
  // }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  // onSubmit(): void {
  //   this.submitted = true;
  //   if (this.form.invalid) {
  //     this.checkSubmitClicked = true;
  //     if (this.counter != 0) {
  //       this.checkSubmitClicked = false;
  //     }
  //     else {
  //       this.isFormSubmitted = true;
  //     }
  //   }
  //   else {
  //   }
  // }


  // onBlur(): void {
  //   this.applyTransition = false;
  // }
  // newPassonBlur(): void {
  //   this.NEewPassTransition = false;
  // }
  // isLoginStatus() {
  //   const storedData = localStorage.getItem('userDetail');
  //   if (storedData) {
  //     const data = JSON.parse(storedData);
  //     data.data.isLogin = 1;
  //     localStorage.setItem('userDetail', JSON.stringify(data));
  //   }

  // }

  // updateIsLoginInLocalStorage() {
  //   const userDataString: any = localStorage.getItem('userDetail');
  //   const userData: any = JSON.parse(userDataString);
  //   userData.isLogin = 1;
  //   const updatedUserDataString = JSON.stringify(userData);
  //   localStorage.setItem('userDetail', updatedUserDataString);
  // }

  // changePassword() {
  //   if (this.form.invalid) {
  //     if (this.form.value.confirmPassword == '' && this.form.value.oldPassword == '' && this.form.value.password == '') {
  //       this.hideAllFieldsError = false;
  //     } else {
  //       this.hideAllFieldsError = true;
  //     }
  //     return;
  //   }

  //   const obj = {
  //     oldPassword: this.form.value.oldPassword,
  //     newPassword: this.form.value.password
  //   }

  //   this.apiService.getchangePassword(CONFIG.changeAdminPassword)
  //     .pipe(first())
  //     .subscribe(
  //       (data: any) => {
  //         if (data.meta) {
  //           this.toaster.success('Password changed Successfully', '', {
  //             positionClass: 'toast-top-center',
  //           });
  //           this.updateIsLoginInLocalStorage();
  //           this.isLoginStatus();
  //         }
  //       },
  //       (error:any) => {
  //         if (error.meta) {
  //           let errorObject = error.meta.message;
  //           if (typeof errorObject === 'object') {
  //             for (var key of Object.keys(errorObject)) {
  //               this.toaster.error(errorObject[key].message, '', {
  //                 positionClass: 'toast-bottom-right',
  //               });
  //               return;
  //             }
  //           } else {

  //           }
  //         }
  //       });
  // }

  // CheckEmptyField(event: any) {
  //   if (event.length > 0) {
  //     let counter = 0;
  //     this.oldPasswordInputData = event;
  //     counter = event.length;
  //   }
  //   if (event.length == 0 && this.form.invalid)
  //     this.checkSubmitClicked = true;
  //   if (this.form.value.password === '' || this.form.value.oldPassword === '' || this.form.value.confirmPassword === '') {
  //     this.checkSubmitClicked = false;
  //   }
  //   else {
  //     this.checkSubmitClicked = false;
  //   }
  // }
  }







