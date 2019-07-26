import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/component-page/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';



@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [
  ],
})
export class CustomerModule { }
