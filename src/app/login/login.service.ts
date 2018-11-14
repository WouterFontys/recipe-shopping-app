import { Injectable } from '@angular/core';
import { AuthServerProviderService } from './auth-server-provider.service';
import {PrincipalService} from './principal.service';

@Injectable()
export class LoginService {
  constructor(private authServerProvider: AuthServerProviderService, private principal: PrincipalService) {}

  login(username, password, callback?) {
    const credentials = {
      username: username,
      password: password,
      rememberMe: false
    };

    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          this.principal.identity(true).then(account => {
            resolve(data);
          });
          return cb();
        },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  logout() {
    if (this.principal.isAuthenticated()) {
      this.authServerProvider.logout().subscribe(() => this.principal.authenticate(null));
    } else {
      this.principal.authenticate(null);
    }
  }
}
