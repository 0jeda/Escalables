import { Component,EventEmitter ,Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-list-component',
  imports: [NgClass],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent {
  @Input()
  task : Task = {
    id: 1, title: "Comprar víveres", completed: false
  }

  completado: boolean = false; 

  listo(): void {
    this.completado = !this.completado; 
  }

  @Output()
  deleteEvent = new EventEmitter<number>();
  @Output()
  markEvent = new EventEmitter<number>();


  delete() : void {
    this.deleteEvent.emit(this.task.id);
  }

}
