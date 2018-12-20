import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { ConfigService } from './config.service';
import { Recipe } from '../recipes/recipe.model';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BackendService {
    constructor(private configService: ConfigService,
                private httpClient: HttpClient) {}

    getRecipes(): Observable<Recipe[]> {
        const url = this.configService.getRecipeUrl();
        return this.httpClient.get<Recipe[]>(url);
    }
}
