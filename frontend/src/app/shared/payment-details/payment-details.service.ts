import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentDetailsService {

    constructor() {}

    formData: PaymentDetail = new PaymentDetail();
}

