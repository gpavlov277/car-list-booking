import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EmailDirective } from './validators/email.directive';
import { SuccessComponent } from './success-toast/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule for mat-select

import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmModalComponent,
    EmailDirective,
    SuccessComponent,
    TimepickerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DatepickerComponent,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [
    ConfirmModalComponent,
    EmailDirective,
    LoaderComponent,
    SuccessComponent,
    DatepickerComponent,
    TimepickerComponent,
  ],
})
export class SharedModule {}
