import { Component, Input, OnInit, Output } from '@angular/core';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';
import { Vehicle } from 'src/app/types/vehicle';
import { UserService } from 'src/app/user/user.service';
import { CarService } from 'src/app/car/car.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule for mat-select

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class DatepickerComponent implements OnInit {
  @Input() vehicleInformationModal: Vehicle | undefined;

  errorMessage: string = '';

  bookingDate: any = {};
  userId: string | undefined;
  vehicleId: string | undefined;

  selectedTimeFrom: Date | undefined;
  selectedTimeTo: Date | undefined;

  selectedHour: number | undefined;
  selectedMinute: number | undefined;

  selectedHourReturn: number | undefined;
  selectedMinuteReturn: number | undefined;

  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  constructor(
    private userService: UserService,
    private carService: CarService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31)!;
  }
  minDate: Date | undefined;
  maxDate: Date | undefined;

  onTimeChanged(e: Event): void {
    if (this.selectedHour !== undefined && this.selectedMinute !== undefined) {
      this.selectedTimeFrom = new Date();
      this.selectedTimeTo = new Date();

      console.log(this.selectedHour);
      this.selectedTimeFrom.setHours(this.selectedHour);
      this.selectedTimeFrom.setMinutes(this.selectedMinute);

      this.selectedTimeTo.setHours(this.selectedHourReturn!);
      this.selectedTimeTo.setMinutes(this.selectedMinuteReturn!);
    }
  }
  setStartDate(event: MatDatepickerInputEvent<Date>) {
    this.bookingDate['startDate'] = event.value;
    this.bookingDate.startDate = new Date(this.bookingDate.startDate);

    if (this.bookingDate.startDate && this.bookingDate.endDate) {
      this.errorMessage = '';
    }
  }
  setEndDate(event: MatDatepickerInputEvent<Date>) {
    this.bookingDate['endDate'] = event.value;
    this.bookingDate.endDate = new Date(this.bookingDate.endDate);

    if (this.bookingDate.startDate && this.bookingDate.endDate) {
      this.errorMessage = '';
    }
  }
  onBookNow(fromDate: Date, toDate: Date, notes: HTMLInputElement) {
    if (!this.bookingDate.startDate || !this.bookingDate.endDate) {
      this.errorMessage = 'Select start date and end date!';
      return;
    }
    this.bookingDate.startDate.setHours(this.selectedHour);
    this.bookingDate.startDate.setMinutes(this.selectedMinute);

    this.bookingDate.endDate.setHours(this.selectedHourReturn);
    this.bookingDate.endDate.setMinutes(this.selectedMinuteReturn);

    console.log('rented from: ' + this.bookingDate.startDate);
    console.log('rented to: ' + this.bookingDate.endDate);
    this.carService
      .bookCar(
        this.vehicleId!,
        this.userId!,
        fromDate,
        toDate,

        notes.value
      )
      .subscribe({
        next: (data) => {},
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
        },
        complete: () => {
          console.log('complete req');
          this.errorMessage = '';
        },
      });
  }
  ngOnInit(): void {
    this.vehicleId = this.vehicleInformationModal?._id;
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.userId = data._id;
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('success');
      },
    });
  }
}
