import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/types/vehicle';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css'],
})
export class BookModalComponent {
  @Input() vehicleFromDetails: Vehicle | undefined;
}
