import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth
        .login(
          this.loginForm.get("username")?.value.toLowerCase(),
          this.loginForm.get("password")?.value
        )
        .subscribe(
          (resp) => {
            localStorage.setItem("token", resp.data.accessToken);
            const currentTime = new Date();
            const userDetails = {
              data: resp.data.userDetail,
              timestamp: currentTime.toISOString(),
            };
            localStorage.setItem("userDetail", JSON.stringify(userDetails));
            this.router.navigate(["/dashboard"]);
          },
          (error) => {
            const err: any = error.error;
            const { meta } = err;
            const { message } = meta;
            console.log(message);
          }
        );
    }
  }
}
