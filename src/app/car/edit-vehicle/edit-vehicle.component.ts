import { Component, OnInit } from '@angular/core';
import { EditVehicleService } from './edit-vehicle.service';
import { Vehicle } from 'src/app/types/vehicle';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css'],
})
export class EditVehicleComponent implements OnInit {
  vehicle: Vehicle | undefined;
  isLoading: boolean = true;
  selectedImage: undefined | string;

  /**
   *
   */
  constructor(
    private vehicleEditService: EditVehicleService,
    private activatedRoute: ActivatedRoute // private editForm: NgForm
  ) {}

  getVehicle(id: string) {
    this.vehicleEditService.getVehicleById(id).subscribe((data) => {
      this.vehicle = data;
      this.isLoading = false;
    });
  }

  updateVehicle(editForm: NgForm) {
    console.log(this.vehicle?._id);
    console.log(editForm.value);
    console.log('submit edit');
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('vehicleId');
    this.getVehicle(id!);
  }

  onUpload($event: Event) {
    const file = ($event.target as HTMLInputElement).files;
    if (file) {
      if (file[0].type.split('/')[0] !== 'image') {
        this.selectedImage = undefined;
        return;
      }
      this.convertToBase64(file[0]);
    }
  }
  convertToBase64(file: File) {
    const observable = new Observable((subsciber: Subscriber<any>) => {
      this.readFile(file, subsciber);
    });
    observable.subscribe((data) => {
      this.selectedImage = data;
    });
  }
  readFile(file: File, subsciber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subsciber.next(filereader.result);
      subsciber.complete();
    };
    filereader.onerror = (error) => {
      subsciber.error(error);
      subsciber.complete();
    };
  }
}
