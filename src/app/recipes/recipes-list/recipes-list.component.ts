import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] =[
    new Recipe('Recipe 1 ','Recipe test 1','https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe('Recipe 2 ','Recipe test 2','https://media-cdn.tripadvisor.com/media/photo-s/10/de/16/db/photo2jpg.jpg'),
    new Recipe('Recipe 3 ','Recipe test 3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSg6LFPrc8F3wrXIekm03rmfnlNC-zj5iv96W7YWrTPEbTWO7x')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
