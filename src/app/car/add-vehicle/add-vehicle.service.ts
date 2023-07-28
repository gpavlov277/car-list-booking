import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddVehicleService {
  constructor(private http: HttpClient) {}

  createVehicle(
    make: string,
    model: string,
    horsepower: string,
    color: string,
    year: string,
    location: string,
    userId: string,
    image: string
  ) {
    return this.http.post('/api/vehicle/create', {
      make,
      model,
      horsepower,
      color,
      year,
      location,
      userId,
      image,
    });
  }
}
