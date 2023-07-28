import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';
import { AddVehicleService } from './add-vehicle.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent {
  userId: string = '';
  showSuccessMsg: boolean = false;
  selectedImage: undefined | string;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private vehiceService: AddVehicleService
  ) {
    this.userService.getUserProfile().subscribe((user) => {
      this.userId = user?._id;
    });
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
  addVehicle(form: NgForm) {
    this.isLoading = true;

    const { make, model, power, color, year, location } = form.value;
    this.vehiceService
      .createVehicle(
        make,
        model,
        power,
        color,
        year,
        location,
        this.userId,
        this.selectedImage!
      )
      .subscribe({
        error: (err) => {
          this.showSuccessMsg = false;
          this.isLoading = false;
          this.errorMessage = 'Something went wrong!';
        },
        complete: () => {
          this.isLoading = false;
          this.showSuccessMsg = true;
          this.errorMessage = '';
          form.reset();
          this.selectedImage = undefined;
          setTimeout(() => {
            this.showSuccessMsg = false;
          }, 3000);
        },
      });
  }
}
