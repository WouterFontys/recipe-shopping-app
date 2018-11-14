import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './config.service';

@Injectable()
export class AuthServerProviderService {

  constructor(private http: HttpClient, private cookieService: CookieService, private configService: ConfigService) {}

  login(credentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(this.configService.getBaseUrl() + '/auth/login', data, { observe: 'response' })
      .pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp) {
      const accessToken = resp.body.access_token;
      if (accessToken) {
        this.storeAuthenticationToken(accessToken);
        return accessToken;
      }
    }
  }

  storeAuthenticationToken(accessToken) {
    this.cookieService.set('access_token', accessToken);
  }

  logout(): Observable<any> {
    this.cookieService.deleteAll();
    return this.http.post(this.configService.getBaseUrl() + '/auth/logout', null);
  }
}
