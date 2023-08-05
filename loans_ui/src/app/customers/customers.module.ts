import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageComponent } from '../alert-message/alert-message.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    SearchCustomerComponent,
    ViewCustomerComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
