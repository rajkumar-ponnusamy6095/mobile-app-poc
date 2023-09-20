import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: loginService
  ) {
    this.createForm();
   }

  ngOnInit() {
    
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log("login form values: ",this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe((res: any)=>{
      console.log("login response: ",res);
    })
  }

}
