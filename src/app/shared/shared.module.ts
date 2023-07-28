import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EmailDirective } from './validators/email.directive';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmModalComponent,
    EmailDirective,
    SuccessComponent,
  ],
  imports: [CommonModule],
  exports: [
    ConfirmModalComponent,
    EmailDirective,
    LoaderComponent,
    SuccessComponent,
  ],
})
export class SharedModule {}
