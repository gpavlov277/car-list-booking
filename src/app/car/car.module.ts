import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AppModule } from '../app.module';
import { BookedComponent } from './booked/booked.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { DetailVehicleComponent } from './detail-vehicle/detail-vehicle.component';

@NgModule({
  declarations: [AddVehicleComponent, FavouritesComponent, BookedComponent, EditVehicleComponent, DetailVehicleComponent],
  imports: [CommonModule],
  exports: [AddVehicleComponent,DetailVehicleComponent],
})
export class CarModule {}
