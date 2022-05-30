import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) { 
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} é do tipo ${animal.type} e tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
