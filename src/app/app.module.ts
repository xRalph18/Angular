import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfRecipesComponent } from './list-of-recipes/list-of-recipes.component';
import { PlantsListComponent } from './plants-list/plants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfRecipesComponent,
    PlantsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
