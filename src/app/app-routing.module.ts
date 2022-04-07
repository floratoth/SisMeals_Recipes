import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'edit-recipe/:id',
    component: EditRecipeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
