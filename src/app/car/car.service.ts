import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getOneCar(id: string) {
    this.http.get(`/api/vehicle/:${id}`);
  }

  constructor(private http: HttpClient) {}
}
