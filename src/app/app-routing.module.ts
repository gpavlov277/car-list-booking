import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddVehicleComponent } from './car/add-vehicle/add-vehicle.component';
import { AuthActivate } from './core/guards/auth.guard';
import { FavouritesComponent } from './car/favourites/favourites.component';
import { BookedComponent } from './car/booked/booked.component';
import { EditVehicleComponent } from './car/edit-vehicle/edit-vehicle.component';
import { DetailVehicleComponent } from './car/detail-vehicle/detail-vehicle.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', redirectTo: '' },
  { path: '', component: CarListComponent },
  {
    path: 'add-vehicle',
    component: AddVehicleComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'my-favourites',
    component: FavouritesComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'booked-by-me',
    component: BookedComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'edit-vehicle/:vehicleId',
    component: EditVehicleComponent,
    canActivate: [AuthActivate],
  },

  {
    path: 'details-vehicle',
    component: DetailVehicleComponent,
  },
  {
    path: 'details-vehicle/:vehicleId',
    component: DetailVehicleComponent,
    // canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
