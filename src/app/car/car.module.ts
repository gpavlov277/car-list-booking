import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AppModule } from '../app.module';
import { BookedComponent } from './booked/booked.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { DetailVehicleComponent } from './detail-vehicle/detail-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookModalComponent } from './book-modal/book-modal.component';
import { DatepickerComponent } from '../shared/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AddVehicleComponent,
    FavouritesComponent,
    BookedComponent,
    EditVehicleComponent,
    DetailVehicleComponent,
    BookModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    DatepickerComponent,
  ],
  exports: [AddVehicleComponent, DetailVehicleComponent],
})
export class CarModule {}
