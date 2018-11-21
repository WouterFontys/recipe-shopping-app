import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

=======
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
// import {LoginService} from './login.service';
>>>>>>> a7b66a4e7ee16a841501c8dfa3b0ee4ac6d4c9a4

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

<<<<<<< HEAD
=======
  // constructor(private loginService: LoginService,
  //             private router: Router) { }
  constructor(private router: Router) { }
>>>>>>> a7b66a4e7ee16a841501c8dfa3b0ee4ac6d4c9a4
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

<<<<<<< HEAD
  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('you are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      }).catch(
      err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        })
      });
=======
  async onSignin(form: NgForm) {
    const username = form.value.email;
    const password = form.value.password;
    console.log('login for user ' + username);
    try {
      // const isAuthenticated = this.loginService.login(username, password);
    if (true) {
      this.router.navigateByUrl('/recipes');
    }
    } catch (error) {
      console.log('login failed');
    }
>>>>>>> a7b66a4e7ee16a841501c8dfa3b0ee4ac6d4c9a4
  }

}
