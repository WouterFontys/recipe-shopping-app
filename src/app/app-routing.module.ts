import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {LoginComponent} from './login/login.component';
import {AddClientComponent} from './add-client/add-client.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import { ClientDetailsComponent} from './client-details/client-details.component';
import { AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children: [
      {path: '', component: RecipeStartComponent },
      {path: 'new', component: RecipeEditComponent },
    ]},
<<<<<<< HEAD
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  {path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard]},
=======
  {path: 'recipe/:id/details', component: RecipeDetailComponent },
  {path: 'recipe/:id/edit', component: RecipeEditComponent },
  {path: 'shopping-list', component: ShoppingListComponent },
>>>>>>> a7b66a4e7ee16a841501c8dfa3b0ee4ac6d4c9a4
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [AuthGuard],
})

export class AppRoutingModule {

}
