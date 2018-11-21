import { Component, Input, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() recipe: Recipe;

  inputName: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipe = this.recipeService.getRecipe(+params['id']);
        }
      );

    this.inputName = this.recipe.name + '_rating';
  }

  onClick(rating: number): void {
    this.recipe.rating = rating;
  }
}
