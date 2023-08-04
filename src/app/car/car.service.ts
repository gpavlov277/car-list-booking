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
    reservationFromHour: string,
    reservationToHour: string,
    notes: string
  ) {
    return this.http.post('/api/reservations/new', {
      vehicle,
      user,
      reservationFromDate,
      reservationToDate,
      reservationFromHour,
      reservationToHour,
      notes,
    });
  }
  constructor(private http: HttpClient) {}
}
