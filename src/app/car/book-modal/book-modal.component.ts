import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/types/vehicle';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css'],
})
export class BookModalComponent {
  @Input() vehicleFromDetails: Vehicle | undefined;

  /**
   *
   */
}
