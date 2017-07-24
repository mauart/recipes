import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class RecipeService{
  recipeChanged=new Subject<Recipe[]>();
  private recipes:Recipe[]=[
    new Recipe('A test recipe','this is a simply test','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',[
      new Ingredient('meat',1),
      new Ingredient('Frech Fries',20)
    ])
  ];

  constructor(private slService:ShoppingListService)
  {

  }


  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(id:number)
  {
    return this.recipes[id];
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number)
  {
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
