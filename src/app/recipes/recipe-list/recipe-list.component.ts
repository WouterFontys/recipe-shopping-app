import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test',
      'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg'),
    new Recipe('Another Test Recipe', 'this is simply a test',
      'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg')
  ];

  @Output() onItemEvent = new EventEmitter<Recipe>();

  onEvent(recipe: Recipe){
    this.onItemEvent.emit(recipe);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
