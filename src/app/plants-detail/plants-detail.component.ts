import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { PlantsService } from '../Services/plants.service';
import { PlantModel } from '../Models/PlantModel';

@Component({
  selector: 'app-plants-detail',
  templateUrl: './plants-detail.component.html',
  styleUrls: ['./plants-detail.component.css']
})
export class PlantsDetailComponent {
  currentId = this.router.snapshot.paramMap.get('id');

  constructor(
    private router: ActivatedRoute,
    private plantsService: PlantsService,
  ) {
    this.Plant = plantsService.getPlantById(Number(this.currentId));
  }

  Plant: PlantModel;
}
