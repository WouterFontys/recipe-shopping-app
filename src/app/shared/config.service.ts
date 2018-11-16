import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private env = {
    baseUrl: 'localhost:4200/api/v1',
    recipe: '/recipe',
    user: '/user',
    ingredient: '/ingredient'
  };

  public getBaseUrl(): string {
    return this.env.baseUrl;
  }
  public getRecipeUrl(): string {
    return `${this.getBaseUrl()}${this.env.recipe}`;
  }
  public getUserUrl(): string {
    return `${this.getBaseUrl()}${this.env.user}`;
  }
  public getIngredientUrl(): string {
    return `${this.getBaseUrl()}${this.env.ingredient}`;
  }
}
