import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/models/customers.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerId  :string ="";
  customerDetails !: Customers;
  constructor(private activatedRoute : ActivatedRoute, private customerService : CustomersService) {
  
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(data => this.customerId = data['_id']);
    this.customerService.viewCustomerDetails(this.customerId).subscribe((data:any) => {
      this.customerDetails = data['results'];
    })
  }


}
