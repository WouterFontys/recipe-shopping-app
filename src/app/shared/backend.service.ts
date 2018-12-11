import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { ConfigService } from './config.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class BackendService {

    constructor(private configService: ConfigService,
                private httpClient: HttpClient,
                private recipeService: RecipeService) {}


    getRecipes() {
        const url = this.configService.getRecipeUrl();
        this.httpClient.get<Recipe[]>(url)
                       .map(
                           (recipes) => {
                               return recipes;
                           }
                       )
                       .subscribe(
                           (recipes: Recipe[]) => {
                            this.recipeService.setRecipes(recipes);
                           }
                       );
        
    }

}