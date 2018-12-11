import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  constructor(public id: number,
              public name: string,
              public description: string,
              public imageUrl: string,
              public preparationTime: number,
              public ingredients: Ingredient[],
              public isPrivate: boolean,
              public numberOfOneStarRatings: number,
              public numberOfTwoStarRatings: number,
              public numberOfThreeStarRatings: number,
              public numberOfFourStarRatings: number,
              public numberOfFiveStarRatings: number,
              public rating: number) {}
}
