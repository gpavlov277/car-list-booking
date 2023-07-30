import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarListService {
  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get('/api/vehicle/all');
  }

  deleteVehicle(id: string) {
    return this.http.delete(`/api/vehicle/delete/${id}`);
  }
}
