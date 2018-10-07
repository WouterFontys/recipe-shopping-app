import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addMultiple(ingredients: Ingredient[]){
    for(let item of ingredients){
      const idx = this.ingredients.findIndex(obj => obj.name === item.name);
      if(idx !== -1){
        this.ingredients[idx].amount += item.amount;
      }
      else {
        // make sure we have a clean copy
        const clone_deep = JSON.parse(JSON.stringify(item));
        this.ingredients.push(clone_deep)
      }
    }
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
