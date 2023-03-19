import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlantsListComponent } from "../app/plants-list/plants-list.component";
import { PlantsDetailComponent } from "../app/plants-detail/plants-detail.component";

const routes: Routes = [
  {path: 'plants', component: PlantsListComponent},
  {path: 'plants/:id', component: PlantsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule],
})
export class AppRoutingModule { }
