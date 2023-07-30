import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EmailDirective } from './validators/email.directive';
import { SuccessComponent } from './success-toast/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmModalComponent,
    EmailDirective,
    SuccessComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    ConfirmModalComponent,
    EmailDirective,
    LoaderComponent,
    SuccessComponent,
  ],
})
export class SharedModule {}
