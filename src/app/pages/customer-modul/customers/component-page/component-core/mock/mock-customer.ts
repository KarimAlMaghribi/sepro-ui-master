import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

import {Customer, CustomerData} from '../data/customer';

@Injectable()
export class CustomerService extends CustomerData {
  // @ts-ignore
  private customerData: Customer[] = [
    {
      id: 1,
      name: 'Hans',
      lastname: 'Mustermann',
      title: ' ',
      phonenumber: '01792445876',
      lastVisit: Date.prototype,
    }, {
      id: 2,
      name: 'Gustav',
      lastname: 'Mustermann',
      title: 'Dr.',
      phonenumber: '01792445876',
      lastVisit: Date.prototype,
    },
  ];
  getAllCustomer(): Observable<Customer[]> {
    return observableOf(this.customerData);
  }

  getCustomerById(id: number): Observable<Customer> {
    return observableOf(this.customerData[id]);
  }

  getCustomerByPhoneNumber(phonenumber: string): Observable<Customer> {
    for (const customer of this.customerData){
      if(customer.phonenumber == phonenumber){
        return  observableOf(customer);
      }
    }
    return observableOf(this.customerData[id].phonenumber);
  }

  getCustomerLastVisit(id: number): Observable<{ lastVisit: Date }> {
    return undefined;
  }

  getCustomerLastname(id: number): Observable<{ lastname: string }> {
    return undefined;
  }

  getCustomerName(id: number): Observable<{ name: string }> {
    return undefined;
  }

  getCustomerPhonenumber(id: number): Observable<{ phonenumber: string }> {
    return undefined;
  }

  getCustomerTitle(id: number): Observable<{ title: string }> {
    return undefined;
  }

  setCustomerLastName(id: number, lastname: string) {
  }

  setCustomerName(id: number, name: string) {
  }

  setCustomerPhoneNumber(id: number, phoneNumber: string) {
  }

  setCustomerTitle(id: number, title: string) {
  }

  setLocalCustomer(customer: Customer) {
  }

  setSystemCustomer(customer: Customer) {
  }


}
