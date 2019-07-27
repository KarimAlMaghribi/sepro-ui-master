import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-customer',
  styleUrls: ['./customer.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>
        Page Content <button nbButton>Hello World</button>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
