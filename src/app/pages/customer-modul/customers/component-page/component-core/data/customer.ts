import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  lastname: string;
  title: string;
  phonenumber: string;
  lastVisit: Date;
}

export abstract class Customer {

// getter
  abstract getAllCustomer(): Observable<Customer[]>;
  abstract getCustomerById(id: number): Observable<Customer>;
  abstract getCustomerByPhoneNumber(id: number): Observable<Customer>;

  abstract getCustomerName(id: number): Observable<{name: string}>;
  abstract getCustomerLastname(id: number): Observable<{lastname: string}>;
  abstract getCustomerTitle(id: number): Observable<{title: string}>;
  abstract getCustomerPhonenumber(id: number): Observable<{phonenumber: string}>;
  abstract getCustomerLastVisit(id: number): Observable<{lastVisit: Date}>;

  /* setter  */
  abstract setLocalCustomer(customer: Customer);
  abstract setSystemCustomer(customer: Customer);

// edit customer instance
  abstract setCustomerName(id: number, name: string);
  abstract setCustomerLastName(id: number, lastname: string);
  abstract setCustomerTitle(id: number, title: string);
  abstract setCustomerPhoneNumber(id: number, phoneNumber: string);
}
