import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/']);
        setTimeout(() => {
          window.location.reload();
        }, 0)
      }, (err: any) => {
        this.loginForm.reset();
        alert('Invalid credentials');
      })
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/login']);
        setTimeout(() => {
          window.location.reload();
        }, 0)
      }, (err: any) => {
        this.registerForm.reset();
        alert('Invalid credentials');
      })
    }
  }

}
