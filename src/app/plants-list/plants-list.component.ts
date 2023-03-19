import { Component } from '@angular/core';
import { PlantModel } from '../Models/PlantModel';
import { PlantsService } from "../Services/plants.service";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {

  constructor(private plantsService: PlantsService){
    this.PlantsList = plantsService.getPlants();
  }

  PlantsList: PlantModel[];
  
  selectedPlant?: PlantModel;

  onSelect(plant: PlantModel): void {
    this.selectedPlant = plant;
  }
}
