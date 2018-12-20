import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {BackendService} from "../shared/backend.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeService{
  constructor(private shoppingListService: ShoppingListService,
              private backendService: BackendService) {}

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }

  getRecipes() {
    return this.backendService.getRecipes();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRating(index: number) {
    return this.recipes[index].rating;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients.slice());
  }
}
