import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowCardComponent } from './componentes/show-card/show-card.component';
import { ControlsComponent } from './componentes/controls/controls.component';
import { Show } from './interfaces/show.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ShowCardComponent, ControlsComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  show: Show[] = [
    {
    title: "Game of Thrones",
    image: "https://th.bing.com/th/id/OIP.nI-8XZNlu4OcWVnD9QnkNAHaEo?w=292&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description : "Nobles familias luchan por el control del Trono de hierro en el continente de poniente"
    },

    {
      title: "The office",
      image: "https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg",
      description : "Un documental sobre la vida cotidiana de los empleados de una oficina de ventas de papel"
      },

    {
    title: "Friends",
    image: "https://live.staticflickr.com/7/11103892_f57d05a21e.jpg",
    description : "Seis amigos navegan por la vida y el amor en nueva york"
    },

    {
      title: "The Mandalorian",
      image: "https://m.media-amazon.com/images/I/71bBDuXUvOL._AC_UF894,1000_QL80_.jpg",
      description: "Un cazarrecompensas mandaloriano navega por la galaxia lejos de la autoridad de la Nueva República.",
    
    },
    {
      title: "The Witcher",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfdUzjdZLK_9v2nmaabc5wsJydbBp2fBMsA&s",
      description: "Un cazador de monstruos a sueldo lucha por encontrar su lugar en un mundo donde las personas son a menudo más perversas que las bestias.",
    },

  ]

  deleteFirst():void{
    this.show.splice(0,1);
  }

  deleteByIndex(num : number):void{
    this.show.splice(num, 1);
  }

  deleteLast():void {
    this.show.pop();
  }

  orderByName():void {
    this.show.sort( (a, b) => a.title.localeCompare(b.title))
  }

  deleteByName(name : string): void {
    const index = this.show.findIndex(show => show.title === name)

    if(index != 1)
      this.deleteByIndex(index);
  }
}
