import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public isPrivate: boolean;
  public rating: starRatingEnum;


  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], isPrivate: boolean, rating: starRatingEnum.notRated) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.isPrivate = isPrivate;
    this.rating = rating;
  }
}
