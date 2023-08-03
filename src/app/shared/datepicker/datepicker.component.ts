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
  ],
})
export class DatepickerComponent implements OnInit {
  @Input() vehicleInformationModal: Vehicle | undefined;

  bookingDate: any = {};
  userId: string | undefined;

  constructor(private userService: UserService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31)!;
  }
  minDate: Date | undefined;
  maxDate: Date | undefined;

  setStartDate(event: MatDatepickerInputEvent<Date>) {
    this.bookingDate['startDate'] = event.value;
    this.bookingDate.startDate = new Date(this.bookingDate.startDate);
  }
  setEndDate(event: MatDatepickerInputEvent<Date>) {
    this.bookingDate['endDate'] = event.value;
    this.bookingDate.endDate = new Date(this.bookingDate.endDate);
  }
  onBookNow(fromDate: string, toDate: string) {
    console.log(fromDate, toDate);
    const isBefore = moment(fromDate).isBefore(toDate);
    console.log(isBefore);
  }
  ngOnInit(): void {
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
