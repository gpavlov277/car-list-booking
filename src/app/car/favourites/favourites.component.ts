import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/types/vehicle';
import { UserService } from 'src/app/user/user.service';
import { EditVehicleService } from '../edit-vehicle/edit-vehicle.service';
import { CarListService } from 'src/app/car-list/car-list.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  /**
   *
   */

  favourites: any = [];
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private carListService: CarListService
  ) {}
  getFavs() {
    const userId = this.userService.userId;
    this.userService.getFavourites(userId!).subscribe((data) => {
      this.favourites = data;
    });
  }
  removeFromFav(vehicleId: string) {
    const userId = this.userService.userId;
    this.carListService.dislikeVehicle(vehicleId, userId!).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getFavs();
      },
    });
  }
  ngOnInit(): void {
    this.getFavs();
  }
}
