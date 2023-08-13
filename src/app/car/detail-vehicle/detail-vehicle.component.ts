import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.css'],
})
export class DetailVehicleComponent implements OnInit {
  vehicleObject: any;
  state: any = {};
  /**
   *
   */
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.state.isLogged = this.isLogged;
    this.state.isLoading = true;
    const vehicleId: string | null =
      this.activatedRoute.snapshot.paramMap.get('vehicleId');
    if (!vehicleId) {
      this.router.navigate(['/']);
      return;
    }
    this.carService.getOneCar(vehicleId).subscribe({
      next: (data) => {
        this.vehicleObject = data;
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/']);
      },
      complete: () => {
        this.state.isLoading = false;
      },
    });
  }
}
