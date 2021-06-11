import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PaymentDetailsService {

    constructor(
        private http: HttpClient,
    ) {}

    formData: PaymentDetail = new PaymentDetail();
    readonly baseURL = 'https://localhost:5001/api/paymentDetails';

    
    postPaymentDetail(){
        return this.http.post(this.baseURL, this.formData)
    }
}

