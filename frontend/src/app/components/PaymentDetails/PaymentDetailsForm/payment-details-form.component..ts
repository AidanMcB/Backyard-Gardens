import { Component } from '@angular/core';
import { PaymentDetailsService } from '../../../shared/payment-details/payment-details.service';

@Component({
    selector: 'payment-details-form.component',
    templateUrl: './payment-details-form.component.html',
    styleUrls: ['./payment-details-form.component.scss']
})

export class PaymentDetailsFormComponent {

    public constructor(
        public service: PaymentDetailsService,
    ) {}

    title = 'Psyment Details Form';

}
