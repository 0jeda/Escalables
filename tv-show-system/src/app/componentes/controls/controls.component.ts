import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  @Output()
  deleteFirstEvent = new EventEmitter<void>();
  @Output()
  deleteLastEvent = new EventEmitter<void>();
  @Output()
  OrderEvent = new EventEmitter<void>();



  deleteFirst():void{
    this.deleteFirstEvent.emit();
  }

  deleteLast():void {
    this.deleteLastEvent.emit();
  }

  orderByName():void {
    this.OrderEvent.emit();
  }
}
