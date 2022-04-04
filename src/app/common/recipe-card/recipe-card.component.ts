import { Recipe } from './../../model/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe();

  constructor() { }

  ngOnInit(): void {
  }

}
