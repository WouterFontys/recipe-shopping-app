import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]){
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
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  clear() {
    this.ingredients = []
  }

  deleteItem(item) {
    const idx = this.ingredients.findIndex(obj => obj.name === item.name);
    if(idx !== -1) {
      this.ingredients.splice(idx, 1);
    }
  }
}
