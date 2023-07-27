import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EmailDirective } from './validators/email.directive';

@NgModule({
  declarations: [LoaderComponent, ConfirmModalComponent, EmailDirective],
  imports: [CommonModule],
  exports: [ConfirmModalComponent, EmailDirective],
})
export class SharedModule {}
