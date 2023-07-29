import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faAdd,
  faEdit,
  faTrash,
  faHeart,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { CarListService } from './car-list.service';
import { Vehicle } from '../types/vehicle';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit, OnDestroy {
  faAdd = faAdd;
  faEdit = faEdit;
  faTrash = faTrash;
  faHeart = faHeart;
  faTicket = faTicket;

  allCars: any = [];
  isLoading: boolean = true;

  constructor(private carListService: CarListService) {}

  getAllCars() {
    this.carListService.getAllVehicles().subscribe((data) => {
      this.allCars = data;
      this.isLoading = false;
    });
  }
  ngOnInit(): void {
    this.getAllCars();
  }
  ngOnDestroy(): void {}
}
