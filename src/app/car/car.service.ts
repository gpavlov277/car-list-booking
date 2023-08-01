import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getOneCar(id: string) {
    return this.http.get(`/api/vehicle/details-vehicle/${id}`);
  }

  constructor(private http: HttpClient) {}
}
