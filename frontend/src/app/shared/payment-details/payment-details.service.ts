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
    readonly baseURL = 'http://localhost:5001/paymentDetails';

    
    public postPaymentDetail(): void{
        this.http.post(this.baseURL, this.formData)
    }
}

