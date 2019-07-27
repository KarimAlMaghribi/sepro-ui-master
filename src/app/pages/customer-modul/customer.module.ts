import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers/component-page/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {
  NbActionsModule,
  NbCardModule, NbIconModule,
  NbLayoutModule, NbListModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule, NbUserModule,
} from '@nebular/theme';



@NgModule({
  declarations: [ CustomerComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [NbThemeModule.forRoot(),
            NbLayoutModule,
            NbCardModule,
            NbTabsetModule,
            NbSidebarModule,
            NbActionsModule,
            NbListModule,
            NbUserModule,
            NbIconModule,
  ],
})
export class CustomerModule { }
