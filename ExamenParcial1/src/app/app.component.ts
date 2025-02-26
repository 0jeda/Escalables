import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponentComponent } from './componentes/task-list-component/task-list-component.component';
import { Task } from './interfaces/task.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TaskListComponentComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenParcial1';

  tasks : Task[] = [
    { id: 1, title: "Comprar víveres", completed: false },
  { id: 2, title: "Terminar el reporte", completed: true },
  { id: 3, title: "Hacer ejercicio", completed: false },
  { id: 4, title: "Llamar al banco", completed: true },
  { id: 5, title: "Leer un capítulo del libro", completed: false },
  { id: 6, title: "Revisar correos", completed: true },
  { id: 7, title: "Preparar la presentación", completed: false },
  { id: 8, title: "Regar las plantas", completed: true },
  { id: 9, title: "Organizar archivos", completed: false },
  { id: 10, title: "Enviar invitaciones", completed: true }
  ]

  deleteByIndex(num : number):void{
    this.tasks.splice(num, 1);
  }

  deleteByName(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.deleteByIndex(index);
    }
  }

  markTask(id: number): void{
    
  }
}
