import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentDetailsFormComponent } from './PaymentDetailsForm/payment-details-form.component.';
import { PaymentDetailsComponent } from './payment-details.component';

@NgModule({
  declarations: [
      PaymentDetailsFormComponent,
      PaymentDetailsComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
    ],
})
export class PaymentDetailsModule { }