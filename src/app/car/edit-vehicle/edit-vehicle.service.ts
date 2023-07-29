import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/types/vehicle';

@Injectable({
  providedIn: 'root',
})
export class EditVehicleService {
  editVehicle(id: string, data: Object) {
    return this.http.put(`/api/vehicle/edit/${id}`, { ...data });
  }

  getVehicleById(id: string) {
    return this.http.get<Vehicle>(`/api/vehicle/${id}`);
  }
  constructor(private http: HttpClient) {}
}
