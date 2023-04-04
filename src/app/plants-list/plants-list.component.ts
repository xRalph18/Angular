import { Component } from '@angular/core';
import { PlantModel } from '../Models/PlantModel';
import { PlantsService } from "../Services/plants.service";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {

  page: number = 1;

  constructor(private plantsService: PlantsService) {
    this.PlantsList = plantsService.getPlants();
  }

  PlantsList: PlantModel[];

  selectedPlant?: PlantModel;

  onSelect(plant: PlantModel): void {
    this.selectedPlant = plant;
  }

  onChangePage(event: any){
    this.page = event;
  }

  Searching(e: any) {
    console.log(e.target.value);
    this.PlantsList = this.plantsService.getPlants().filter(p => p.PlantName.toLocaleLowerCase().replace(" ", "").includes(e.target.value.toLocaleLowerCase().replace(" ", "")));
  }
}
