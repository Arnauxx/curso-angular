import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Luna", type: "dog", age: 2},
    {name: "Ayka", type: "dog", age: 1},
    {name: "Garfield", type: "cat", age: 5},
    {name: "Vitoria", type: "chicken", age: 10},
  ];

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} é do tipo ${animal.type} e tem ${animal.age} anos`;
  }

}
