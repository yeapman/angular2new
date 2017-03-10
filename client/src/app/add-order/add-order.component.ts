import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  myDate: Date;
  constructor() { this.myDate = new Date() }

  ngOnInit() {
  }

}
