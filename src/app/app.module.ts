import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantsDetailComponent } from './plants-detail/plants-detail.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    PlantsDetailComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
