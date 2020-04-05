import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import {dropdownDirective} from './shared/dropdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeItemComponent,
    dropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
