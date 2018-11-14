import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private environment = {
    serverUrl: 'localhost:4200',
  };

  public getBaseUrl(): string {
    return this.environment.serverUrl;
  }
}