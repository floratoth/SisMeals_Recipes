import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { first, take } from 'rxjs';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe?: Recipe;

  constructor(
    private firestore: AngularFirestore,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.aRoute.params.subscribe((params) => {
      const recipeId = params['id'];
      console.log(recipeId);

      this.firestore
        .collection<Recipe>('recipes')
        .doc(recipeId)
        .get()
        .pipe(first())
        .subscribe((r) => (this.recipe = r.data()));
    });
  }
}
