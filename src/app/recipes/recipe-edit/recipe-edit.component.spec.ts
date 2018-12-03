import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditComponent } from './recipe-edit.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';

describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {
            params: Observable.of({id: 0})
    }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
