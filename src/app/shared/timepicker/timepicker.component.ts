import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css'],
})
export class TimepickerComponent {
  selectedTime: Date | undefined;
  selectedHour: number | undefined;
  selectedMinute: number | undefined;
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  onTimeChanged(e: Event): void {
    if (this.selectedHour !== undefined && this.selectedMinute !== undefined) {
      // Update the selectedTime property based on selectedHour and selectedMinute
      this.selectedTime = new Date();
      this.selectedTime.setHours(this.selectedHour);
      this.selectedTime.setMinutes(this.selectedMinute);
    }
  }
}
