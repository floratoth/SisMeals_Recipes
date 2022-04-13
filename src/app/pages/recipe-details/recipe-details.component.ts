import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe?: Recipe;
  recipeId: string;
  //ingredients?: Array<{value: string}> = [];

  constructor(
    private firestore: AngularFirestore,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aRoute.params.subscribe((params) => {
      this.recipeId = params['id'];
      this.getRecipe();
    });
  }

  getRecipe() {
    if (!this.recipeId) {
      return;
    }

    this.firestore
      .collection<Recipe>('recipes')
      .doc(this.recipeId)
      .get()
      .pipe(first())
      .subscribe((r) => (this.recipe = r.data()));
  }

  deleteRecipe() {
    if (!this.recipeId) {
      return;
    }

    this.firestore.collection<Recipe>('recipes').doc(this.recipeId).delete();
    this.router.navigate(['/', 'recipes']);
  }
}
