import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public isPrivate: boolean;
  public rating: number;

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[],
               isPrivate: boolean, rating: 0) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.isPrivate = isPrivate;
    this.rating = rating;
  }
}
