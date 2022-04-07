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
    private router: Router,
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
            console.log("url: ", url);
            this.recipe.imgUrl = url; // <-- do what ever you want with the url..
          });
        })
      )
      .subscribe();
  }

  onCreate(): void {
    this.recipe.category = this.selectedOption;
    console.log("selected: ", this.selectedOption);
    const plain = { ...this.recipe };
    console.log(plain);
    delete plain.id;
    this.recipeCollection.add(plain);
    this.router.navigate(['/', 'recipes']);
  }

/*   selectOption(selectedOption: string): void {
    if (selectedOption === null) {
      return;
    }
    this.selected = this.recipe.category;
  } */

  /* upload = (event: any) => {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref('/images/' + randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);

/*     this.uploadProgress = this.task.percentageChanges().pipe(
      filter((changes) => changes !== undefined),
      map((changes) => changes!)
    );
    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL$ = this.ref.getDownloadURL())))
      .subscribe();

    this.downloadURL$.pipe(take(1)).subscribe((url) => {
      this.downloadUrl = url;
    });
  }; */
}
