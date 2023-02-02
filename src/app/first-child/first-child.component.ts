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
