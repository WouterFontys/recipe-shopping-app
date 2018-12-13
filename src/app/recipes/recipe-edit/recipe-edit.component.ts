import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;
  selectedImage = null;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          let recipe = this.recipeService.getRecipe(this.id);
          this.recipe = JSON.parse(JSON.stringify(recipe))
        }
      );
  }

  onSaveChange() {}

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
  }

  checkValue(evt) {
    if(evt.target.value < 0) this.openMessage();
  }

  openMessage() {
    this.snackBar.open('Ingredient aantal kan niet negatief zijn',  null, {duration: 4000});
  }
}

