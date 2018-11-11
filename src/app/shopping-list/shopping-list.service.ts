import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let item of ingredients) {
      const idx = this.checkDuplicate(item);
      if (idx !== -1) {
        this.ingredients[idx].amount += item.amount;
      }
      else {
        // make sure we have a clean copy
        const clone_deep = JSON.parse(JSON.stringify(item));
        this.ingredients.push(clone_deep);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  checkDuplicate(item) {
    return this.ingredients.findIndex(obj => obj.name === item.name);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    const idx = this.checkDuplicate(newIngredient);
    if (idx !== index) {
      this.ingredients[idx].amount += newIngredient.amount;
      this.ingredients.splice(index, 1);
    }
    else {
      this.ingredients[index] = newIngredient;
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }


  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
