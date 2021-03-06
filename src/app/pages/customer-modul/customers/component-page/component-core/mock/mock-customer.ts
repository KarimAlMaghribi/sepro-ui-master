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
      systemCustomer: true,
    }, {
      id: 2,
      name: 'Gustav',
      lastname: 'Mustermann',
      title: 'Dr.',
      phonenumber: '01792445876',
      lastVisit: Date.prototype,
      systemCustomer: false,
    },
  ];
  getAllCustomer(): Observable<Customer[]> {
    return observableOf(this.customerData);
  }

  getCustomerById(id: number): Observable<Customer> {
    return observableOf(this.customerData[id]);
  }

  getCustomerByPhoneNumber(phonenumber: string): Observable<Customer> {
    for (const customer of this.customerData) {
      if (customer.phonenumber === phonenumber) {
        return observableOf(customer);
      } else {
        return undefined;
      }
    }
  }

  getCustomerLastVisit(id: number): Observable<Date> {
    return observableOf(this.customerData[id].lastVisit);
  }

  getCustomerLastname(id: number): Observable<string> {
    return observableOf(this.customerData[id].lastname);
  }

  getCustomerName(id: number): Observable<string> {
    return observableOf(this.customerData[id].name);
  }

  getCustomerPhonenumber(id: number): Observable<string> {
    return observableOf(this.customerData[id].phonenumber);
  }

  getCustomerTitle(id: number): Observable<string> {
    return observableOf(this.customerData[id].title);
  }

  getCustomerSystemState(id: number): Observable<boolean> {
    return observableOf(this.customerData[id].systemCustomer);
  }

  setCustomerLastName(id: number, lastname: string) {
    this.customerData[id].lastname = lastname;
  }

  setCustomerName(id: number, name: string) {
    this.customerData[id].lastname = name;
  }

  setCustomerPhoneNumber(id: number, phoneNumber: string) {
    this.customerData[id].phonenumber = phoneNumber;
  }

  setCustomerTitle(id: number, title: string) {
    this.customerData[id].title = title;
  }

  switchCustomerSytemState(id: number) {
    this.customerData[id].systemCustomer = !this.customerData[id].systemCustomer;

  }
  setCustomerSytemState(id: number, state: boolean) {
    this.customerData[id].systemCustomer = state;
  }

  setCustomer(customer: Customer) {
    this.customerData.push(customer);
  }

}
