import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Luna", type: "dog"},
    {name: "Ayka", type: "dog"},
    {name: "Garfield", type: "cat"},
    {name: "Vitoria", type: "chicken"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
