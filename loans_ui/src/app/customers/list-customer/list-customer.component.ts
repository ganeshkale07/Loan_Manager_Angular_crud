import { Component , OnInit} from '@angular/core';
import { CustomersService  } from 'src/app/services/customers.service';
import { Customers } from 'src/app/models/customers.model';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerResult:any;
  customerList!:Customers[];
  searchByUser :string = '';
  currentPage : number = 1;
  pageSize = 4;
  maxPages : number = 0;
  constructor(private customerService : CustomersService){


  }

  ngOnInit(){
    this.getAllCustomers(this.currentPage,this.pageSize);
  }

  getAllCustomers(pgNumber:number,pgSize:number){
    this.customerService.getAllCustomers(pgNumber,pgSize).subscribe( (data :any) => {
      this.customerResult =  data;
      //actual list on UI
      this.customerList = this.customerResult.results;
      this.maxPages = this.customerResult.recordCount / this.pageSize;
      console.log(this.customerList)
    })
  }

  onDemandDeletCustomer(id:string){
    this.customerService.deleteCustomers(id).subscribe((data:any) => {
      if(data.status == 200){
        alert("deleted successfully");
        this.getAllCustomers(this.currentPage,this.pageSize);
      }else{
        alert("delet failed")
      }
    });
  }

  onSearch(){
    this.customerService.searchCustomers(this.searchByUser).subscribe(data => console.log(data))
  }

  goToSpecificPage(latestPage:number){
      if(latestPage === -1){
        this.currentPage != 1 ? this.currentPage-- : this.currentPage = 1;
      }else if(latestPage === 99){
        this.currentPage++;
      }else{
        this.currentPage = latestPage;
      }
      console.log(this.currentPage)
      this.getAllCustomers(this.currentPage,this.pageSize);
  }

}
