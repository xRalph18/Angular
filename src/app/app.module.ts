import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantsDetailComponent } from './plants-detail/plants-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    PlantsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
