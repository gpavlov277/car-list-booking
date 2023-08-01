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

  likedCars: string[] = [];
  userId: string | undefined;

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
  getUser() {
    this.userService.getUserProfile().subscribe((data) => {
      this.likedCars = data.favouriteCars;
      this.userId = data._id;
    });
  }
  ngOnInit(): void {
    this.getAllCars();
    this.getUser();
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
    if (!userId) {
      return;
    }
    this.carListService.likeVehicle(vehicleId, userId!).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getAllCars();
        this.getUser();
      },
    });
  }
  onDislike(vehicleId: string) {
    const userId = this.userService.userId;
    if (!userId) {
      return;
    }
    this.carListService.dislikeVehicle(vehicleId, userId!).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getAllCars();
        this.getUser();
      },
    });
  }
}
