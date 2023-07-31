import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewCustomer } from '../models/new_customer.model';
import { ChildActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private HttpClient : HttpClient) { }

  getAllCustomers(pageNumber:number,pageSize:number):Observable<any>{
    const url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS+"?pageNumber="+pageNumber+"&pageSize="+pageSize;
    console.log(url)
    return this.HttpClient.get(url);
  }

  createCustomers(newCustomerObj:NewCustomer):Observable<any>{
    const url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.CREATE_CUSTOMER;
     return this.HttpClient.post<any>(url,newCustomerObj);
  }

  updateCustomers(id:string,customersObj:NewCustomer):Observable<any>{
    const url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.UPDATE_CUSTOMERS+id;
    return this.HttpClient.put(url,customersObj);
  }

  deleteCustomers(id:string):Observable<any>{
    const url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.DELETE_CUSTOMER+id;
    console.log(url)
    return this.HttpClient.delete(url);
  }

  viewCustomerDetails(id:string):Observable<any>{
    let url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_SPECIFIC_CUSTOMER+id;
    return this.HttpClient.get(url);
  }

  searchCustomers(content:string):Observable<any>{
    let url = environment.BASE_URL+environment.CUSTOMER_BASE_URL+environment.CUSTOMER.SEARCH_CUSTOMERS+content;
    return this.HttpClient.get(url);
  }
}
