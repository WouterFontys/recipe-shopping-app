import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService){}

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
      starRatingEnum.notRated),
    new Recipe('Swedish meatballs',
      'Taste as delicious as the women are in Sweden!',
      'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2-650x975.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Balls', 2)
      ],
      false,
      starRatingEnum.notRated),
    new Recipe('Stroganoff',
      'Really really tasty stroganoff',
      'https://www.cscassets.com/recipes/wide_cknew/wide_23916.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Stroganoff sauce', 2),
        new Ingredient('Mushrooms', 2),
      ],
      false,
      starRatingEnum.notRated)
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  getRating(index: number){
    return this.recipes[index].rating;
  }

  addToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients.slice());
  }
}
