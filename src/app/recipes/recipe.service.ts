import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}
    
  private recipes: Recipe[] = [
    new Recipe(
      'Stir fried noodles Asian style',
      'A super-tasty stir fried noodles recipe - for the real Ramenlovers!',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Noodles saus', 20),
        new Ingredient('Een beetje van jezelf', 1),
        new Ingredient('En een beetje van Maggi', 1),
      ],
      true,
        0),
    new Recipe('Swedish meatballs',
      'Taste as delicious as the women are in Sweden!',
      'https://4.bp.blogspot.com/-QU9Pkk9Ejk8/WoCEqUN--8I/AAAAAAAAz-w/6u7mngNwbOIuK1DDqLfZ8ru7ogYHk_kTQCLcBGAs/s1600/Creamy-Swedish-Meatballs2-WIDE.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Balls', 2)
      ],
      false,
      0),
    new Recipe('Stroganoff',
      'Really really tasty stroganoff',
      'https://www.sameneenkoekopen.nl/uploads/images/recept/Bieflapjes-Stroganoff.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Stroganoff sauce', 2),
        new Ingredient('Mushrooms', 2),
      ],
      false,
      0)
  ];

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
