import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  //recipeDefault: Recipe = new Recipe();
  //keys: string[] = Object.keys(this.recipeDefault);

  keys: string[] = ["LUNCH", "SOUP", "VEGETARIAN", "DESSERT", "DRINKS", "SALAD", "BREAKFAST"];

  catFilter: string = '';
  phrase: string = '';

  recipeCollection = this.firestore.collection<Recipe>('recipes');

  recipeList$: Observable<Recipe[]> = this.recipeCollection.valueChanges({idField: 'id'});

  constructor(
    private firestore: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

}
