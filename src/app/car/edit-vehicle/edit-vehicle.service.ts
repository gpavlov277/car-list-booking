import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/types/vehicle';

@Injectable({
  providedIn: 'root',
})
export class EditVehicleService {
  editVehicle(
    id: string,
    make: string,
    model: string,
    horsepower: string,
    color: string,
    year: string,
    location: string,
    image: string
  ) {
    return this.http.put(`/api/vehicle/edit/${id}`, {
      make,
      model,
      horsepower,
      color,
      year,
      location,
      image,
    });
  }

  getVehicleById(id: string) {
    return this.http.get<Vehicle>(`/api/vehicle/details-vehicle/${id}`);
  }
  constructor(private http: HttpClient) {}
}
