import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void{
    this.show = !this.show; //toggle
  }
  
}
