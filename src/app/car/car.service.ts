import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getOneCar(id: string) {
    return this.http.get(`/api/vehicle/details-vehicle/${id}`);
  }

  bookCar(
    vehicle: string,
    user: string,
    reservationFromDate: Date,
    reservationToDate: Date,
    notes: string
  ) {
    return this.http.post('/api/reservations/new', {
      vehicle,
      user,
      reservationFromDate,
      reservationToDate,
      notes,
    });
  }

  constructor(private http: HttpClient) {}
}
