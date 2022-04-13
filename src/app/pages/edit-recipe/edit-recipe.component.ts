import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recipe } from 'src/app/model/recipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { map, finalize, filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  keys: string[] = [
    'LUNCH',
    'SOUP',
    'VEGETARIAN',
    'DESSERT',
    'DRINKS',
    'SALAD',
    'BREAKFAST',
  ];

  recipe: Recipe;
  recipeCollection = this.firestore.collection<Recipe>('recipes');

  ingredients: Array<{value: string}> = [];

  selectedOption: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL$: Observable<string>;
  downloadURL: string;
  imageFile: any;

  constructor(
    private aRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id === '0') {
        this.recipe = new Recipe();
        return;
      }
      this.firestore
        .collection('recipes')
        .doc(id)
        .get()
        .subscribe((snapshot) => (this.recipe = snapshot.data() as Recipe));
    });
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  addIngredient(): void {
    this.ingredients.push({value: ""});
    console.log()
  }

  upload($event: any) {
    this.imageFile = $event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(randomId);
    this.task = this.ref.put(this.imageFile);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe((url) => {
            console.log('url: ', url);
            this.recipe.imgUrl = url;
          });
        })
      )
      .subscribe();
  }

  onCreate(): void {
    this.recipe.category = this.selectedOption;
    this.recipe.ingredients = this.ingredients;
    console.log('selected: ', this.selectedOption);
    const plain = { ...this.recipe };
    console.log(plain);
    delete plain.id;
    this.recipeCollection.add(plain);
    this.router.navigate(['/', 'recipes']);
  }
}
