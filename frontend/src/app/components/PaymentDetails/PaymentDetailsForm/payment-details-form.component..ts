import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { PaymentDetail } from '../../../shared/models/payment-detail.model';
import { PaymentDetailsService } from '../../../shared/payment-details/payment-details.service';

@Component({
    selector: 'payment-details-form',
    templateUrl: './payment-details-form.component.html',
    styleUrls: ['./payment-details-form.component.scss']
})

export class PaymentDetailsFormComponent implements OnInit {
    
    title = 'Payment Details Form';

    public constructor(
        public service: PaymentDetailsService,
        private toaster: ToastrService,
    ) {}


    ngOnInit(): void {

    }

    public onSubmit(form: NgForm){
        this.service.postPaymentDetail().subscribe(
            res => {
                this.resetForm(form)
                this.toaster.success('Submited Successfully', 'Payment Detail Register')
            },
            err => console.log(err)
        )
    }

    public resetForm(form: NgForm){
        form.form.reset();
        this.service.formData = new PaymentDetail();
    }

}
