import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarListService } from 'src/app/car-list/car-list.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  @Input() vehicleIdItem = '';
  @Output() deleteEvent = new EventEmitter<boolean>();
  showModal = false;
  constructor(private router: Router, private carListService: CarListService) {}

  deleteItem(value: boolean) {
    this.deleteEvent.emit(value);
  }
}
