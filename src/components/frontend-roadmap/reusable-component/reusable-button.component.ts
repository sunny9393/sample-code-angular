import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss']
})

export class ReusableButtonComponent {
  @Input() label: string = 'Button';
  @Input() color: string = 'primary';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit();
  }
}