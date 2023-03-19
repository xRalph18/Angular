import { Injectable } from '@angular/core';
import { PlantModel } from "../Models/PlantModel";
import { plants } from "../Models/PlantsMocks";

@Injectable({
  providedIn: 'root'
})

export class PlantsService {

  constructor() { }

  getPlants(): PlantModel[] {
    return plants;
  }

  getPlantById(id: number): PlantModel {
    const result: PlantModel = plants.find(p => {return p.Id == id})!;
    return result;
  }
}
