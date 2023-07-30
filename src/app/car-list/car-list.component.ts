import { Component, OnInit } from '@angular/core';
import {
  faAdd,
  faEdit,
  faTrash,
  faHeart,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { CarListService } from './car-list.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  faAdd = faAdd;
  faEdit = faEdit;
  faTrash = faTrash;
  faHeart = faHeart;
  faTicket = faTicket;

  allCars: any = [];
  isLoading: boolean = true;

  vehicleId = '';
  btnEl: any;

  constructor(
    private carListService: CarListService,
    private router: Router,
    private userService: UserService
  ) {}

  getAllCars() {
    this.carListService.getAllVehicles().subscribe((data) => {
      this.allCars = data;
      this.isLoading = false;
    });
  }
  ngOnInit(): void {
    this.getAllCars();
  }
  getId(id: string, btn: HTMLElement) {
    this.vehicleId = id;
    this.btnEl = btn;
  }
  onDelete(value: boolean) {
    this.btnEl.parentElement.parentElement.classList.add('blur');
    if (value) {
      this.carListService.deleteVehicle(this.vehicleId).subscribe({
        error: (err) => {
          console.log(err);
          this.btnEl.parentElement.parentElement.classList.remove('blur');
        },
        complete: () => {
          this.btnEl.parentElement.parentElement.remove();
        },
      });
    }
  }
  onLike(vehicleId: string): void {
    const userId = this.userService.userId;
    this.carListService.likeVehicle(vehicleId, userId!).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Liked');
      },
    });
  }
}
