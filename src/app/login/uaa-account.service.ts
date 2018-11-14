import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class UaaAccountService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  get(): Observable<Object> {
    return this.http.get<Object>(this.configService.getBaseUrl());
  }
}
