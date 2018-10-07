import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test',
      'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg'),
    new Recipe('Another Test Recipe', 'this is simply a test',
      'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
