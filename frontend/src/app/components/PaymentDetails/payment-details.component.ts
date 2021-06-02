import { Component } from '@angular/core';
import { PaymentDetailsService } from '../../shared/payment-details/payment-details.service';

@Component({
    selector: 'payment-details.component',
    templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.scss']
})

export class PaymentDetailsComponent {

    public constructor(
        public service: PaymentDetailsService,
    ) {}

    title = 'Payment Details';

}
