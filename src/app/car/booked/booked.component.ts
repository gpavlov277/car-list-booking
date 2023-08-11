import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

import * as moment from 'moment';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css'],
})
export class BookedComponent implements OnInit {
  moment: any = moment;
  today: any;
  bookedVehicles: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.today = moment();
    console.log(this.today?._d);
    this.userService.getBooked().subscribe({
      next: (bookedData) => {
        console.log(bookedData);
        this.bookedVehicles = bookedData;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('get booked data success');
        console.log(this.bookedVehicles);
      },
    });
  }
}
