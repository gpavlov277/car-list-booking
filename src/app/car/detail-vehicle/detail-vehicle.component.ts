import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) {}
  ngOnInit(): void {
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
        console.log(this.vehicleObject);
      },
    });
  }
}
