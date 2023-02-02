# Lazy Loading in Angular

NgModules are eagerly loaded by default. This implies that all NgModules, whether or not they are immediately required, load together with the application as soon as it launches. Consider `lazy loading`, a design strategy that loads NgModules only when they are required, for large applications with several routes. Initial bundle sizes are kept smaller through `lazy loading`, which also speeds up loading time.

## Create a feature module with routing

Here's an example of an Angular application that has routing enabled and uses lazy loading to load the `FirstChildComponent` and `SecondChildComponent`. For more details, see the [step-by-step setup](https://angular.io/guide/lazy-loading-ngmodules#step-by-step-setup) documenation about basic routing.

1. To create the first route module name with `firstchild`, use the following command in the command line tool, where `firstChild` is the name of the first feature module.

```bash
ng generate module firstChild --route firstChild --module app.module
```

Then follow the [documentation](https://ej2.syncfusion.com/angular/documentation/calendar/getting-started#installing-syncfusion-calendar-package) to add the Syncfusion Calendar component for `FirstChildComponent` component.

In the `first-child.component.ts` file, the Syncfusion Calendar component is added as follows:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `<ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-calendar>`,
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public dateValue: Date = new Date(this.fullYear, this.month, 11);
  public minDate: Date = new Date(this.fullYear, this.month, 9);
  public maxDate: Date = new Date(this.fullYear, this.month, 15);
  constructor() { }

  ngOnInit() {
  }
}
```

2. Then create a second route module name with `secondChild`, use the following command in the command line tool, where `secondChild` is the name of the second feature module.

```bash
ng generate module secondChild --route secondChild --module app.module
```
Then follow the [documentation](https://ej2.syncfusion.com/angular/documentation/grid/getting-started#adding-syncfusion-grid-package) to add Syncfusion Grid component for `secondChild` component.

In the `second-child.component.ts` file, the Syncfusion Grid component is added as follows,

```typescript
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
```

The `AppRoutingModule` class in the `app-routing.module.ts` file defines the routing in the application. It uses the `loadChildren` property in the routing configuration to lazily load the `FirstChildModule` and `SecondChildModule` when the user navigates to the corresponding routes. This improves the initial loading time and performance of the application by only loading the necessary modules on demand.

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
```

In the above code block, we are using loadChildren property in the routing configuration to lazily load the `firstChild` component and `secondChild` component when the user navigates to the corresponding routes. This way, the application only loads the necessary modules on demand, improving the initial loading time and performance of the application.

After completing the configuration required to render a application, run the `ng serve` command to display the output in your default browser.