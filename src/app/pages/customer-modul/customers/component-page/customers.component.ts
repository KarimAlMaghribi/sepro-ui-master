import { Component, OnDestroy } from '@angular/core';
import { CustomerData, Customer } from '../component-page/component-core/data/customer';

import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnDestroy {
  private alive = true;
  customers: any[];

  constructor(private customerService: CustomerData) {
  forkJoin(this.customerService.getAllCustomer)
  .pipe(takeWhile(() => this.alive))
      .subscribe((customers: CustomerData[]) => {
        this.customers = customers;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
