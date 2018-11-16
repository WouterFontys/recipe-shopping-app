import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private router: Router,
              private route: ActivatedRoute
  ) {}
  ngOnInit() {
  }
  onClickSelectDetail() {
    this.router.navigate(['recipe', this.index, 'details'], {queryParams: {allowEdit: true}});
  }
}
