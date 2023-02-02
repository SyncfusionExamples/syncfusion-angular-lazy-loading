import { Component } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-second-child',
  template: `<ejs-grid [dataSource]='data'>
  <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
  </e-columns>
  </ejs-grid>`,
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  public data!: DataManager;
  constructor() { }

  ngOnInit() {
    this.data = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
      adaptor: new ODataV4Adaptor()
    });
  }
}
