import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EmailDirective } from './validators/email.directive';
import { SuccessComponent } from './success-toast/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmModalComponent,
    EmailDirective,
    SuccessComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, DatepickerComponent],
  exports: [
    ConfirmModalComponent,
    EmailDirective,
    LoaderComponent,
    SuccessComponent,
    DatepickerComponent,
  ],
})
export class SharedModule {}
