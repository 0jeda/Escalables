import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-card',
  imports: [NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {

  @Input()
  show: Show = {
    title: "Game of Thrones",
    image: "https://th.bing.com/th/id/OIP.nI-8XZNlu4OcWVnD9QnkNAHaEo?w=292&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description : "Nobles familias luchan por el control del Trono de hierro en el continente de poniente"
  }

  isSelected: boolean = false;

  onSelected(){
    this.isSelected =!this.isSelected;
  }

  @Output()
  deleteEvent = new EventEmitter<string>();

  delete() : void {
    this.deleteEvent.emit(this.show.title);
  }
}
