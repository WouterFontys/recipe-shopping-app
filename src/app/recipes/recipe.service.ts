import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';


import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}
    
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [];

  private recipes: Recipe[] = [
    new Recipe(
      null,
      'Stir fried noodles Asian style',
      'A super-tasty stir fried noodles recipe - for the real Ramenlovers!',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg',
      20,
      [
        new Ingredient(null, 'Noodles', 1),
        new Ingredient(null, 'Noodles saus', 20),
        new Ingredient(null, 'Een beetje van jezelf', 1),
        new Ingredient(null, 'En een beetje van Maggi', 1),
      ],
      true,
      0,
      0,
      0,
      0,
      0,
      0),
    new Recipe(
      null,
      'Swedish meatballs',
      'Taste as delicious as the women are in Sweden!',
      'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2-650x975.jpg',
      25,
      [
        new Ingredient(null, 'Meat', 1),
        new Ingredient(null, 'Balls', 2)
      ],
      false,
      0,
      0,
      0,
      0,
      0,
      0),
    new Recipe(
      null,
      'Stroganoff',
      'Really really tasty stroganoff',
      'https://www.cscassets.com/recipes/wide_cknew/wide_23916.jpg',
      30,
      [
        new Ingredient(null, 'Beef', 1),
        new Ingredient(null, 'Stroganoff sauce', 2),
        new Ingredient(null, 'Mushrooms', 2),
      ],
      false,
      0,
      0,
      0,
      0,
      0,
      0)
  ];


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
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
