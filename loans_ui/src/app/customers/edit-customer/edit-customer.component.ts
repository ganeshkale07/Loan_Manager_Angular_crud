import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customers } from 'src/app/models/customers.model';
import { CustomersService } from 'src/app/services/customers.service';
import { FormGroup , FormControl,Validators, FormBuilder, NgForm } from '@angular/forms';
import { NewCustomer } from 'src/app/models/new_customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  customerId : string = "";
  customerDetails !: Customers;
  customerDetailsForm : NewCustomer = {
    firstName : '',
    lastName : '',
    emailAddress: '',
    dob : '',
    department : '',
    phoneNumber : ''
  };

  // customerEditForm !: FormGroup;
  // firstName !: FormControl ;
  // lastName !: FormControl ;
  // email !: FormControl ;
  // dob !: FormControl ;
  // department !: FormControl ;
  // phone !: FormControl ;

  constructor(private activatedRoute : ActivatedRoute, private customerService : CustomersService, private fb : FormBuilder){
    
  }

  //To show by default value
  ngOnInit(){
    this.activatedRoute.params.subscribe(data => this.customerId = data['_id']);
    this.customerService.viewCustomerDetails(this.customerId).subscribe(async(data:any) => {
      this.customerDetails = await data['results'];
      console.log(this.customerDetails)
      this.customerDetailsForm = {
        firstName : this.customerDetails.firstName,
        lastName : this.customerDetails.lastName,
        emailAddress: this.customerDetails.emailAddress,
        dob : this.customerDetails.dob,
        department : this.customerDetails.department,
        phoneNumber : this.customerDetails.phoneNumber
      };
      // this.customerEditFormModel();
      // this.customerForm();
    });
    

  }



  // customerEditFormModel(){
  //   console.log(this.customerDetails);
  //   this.firstName = new FormControl("JOKER");
  //   this.email = new FormControl(this.customerDetails.emailAddress);
  //   this.lastName = new FormControl(this.customerDetails.lastName);
  //   this.dob = new FormControl(this.customerDetails.dob);
  //   this.department = new FormControl(this.customerDetails.department);
  //   this.phone = new FormControl(this.customerDetails.phoneNumber);
  // }

  // customerForm(){
  //   this.customerEditForm = this.fb.group({
  //     firstName : this.firstName ,
  //     lastName : this.lastName,
  //     email: this.email,
  //     dob : this.dob,
  //     department : this.department,
  //     phone : this.phone
  //   });
  // }
    onSubmit(form :NgForm){
      this.customerService.updateCustomers(this.customerDetails._id,form.value).subscribe((data : any) =>  {
        if(data.status == 200){
          alert(data.message);
        }else{
          alert(data.message)
        }
      })

   }

  }



