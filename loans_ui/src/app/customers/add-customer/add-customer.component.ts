import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
  customerCreateForm !: FormGroup;
  firstName !: FormControl ;
  lastName !: FormControl ;
  email !: FormControl ;
  dob !: FormControl ;
  department !: FormControl ;
  phone !: FormControl ;

  constructor(private fb : FormBuilder, private customerService:CustomersService){

  }

  ngOnInit(): void {
    this.customerFormModel();
    this.customerForm();
  }


  customerFormModel(){
    this.firstName = new FormControl('');
    this.email = new FormControl('');
    this.lastName = new FormControl('');
    this.dob = new FormControl('');
    this.department = new FormControl('');
    this.phone = new FormControl('');
  }

  customerForm(){
    this.customerCreateForm = this.fb.group({
      firstName : this.firstName ,
      lastName : this.lastName,
      emailAddress: this.email,
      dob : this.dob,
      department : this.department,
      phoneNumber : this.phone
    })

  }

  onSubmit(form:FormGroup){
    this.customerService.createCustomers(form.value).subscribe((response: any) => {
      console.log(form.value)
      alert(response.message);
      this.customerCreateForm.reset();
    });;
  }



}
