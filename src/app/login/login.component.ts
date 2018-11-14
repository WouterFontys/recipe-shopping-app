import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService,
              private router: Router) { }
  ngOnInit() {
  }

  async onSignin(form: NgForm) {
    const username = form.value.email;
    const password = form.value.password;
    console.log('login for user ' + username);
    try {
      const isAuthenticated = this.loginService.login(username, password);
    if (isAuthenticated) {
      this.router.navigateByUrl('/recipes');
    }
    } catch (error) {
      console.log('login failed');
    }
  }
}
