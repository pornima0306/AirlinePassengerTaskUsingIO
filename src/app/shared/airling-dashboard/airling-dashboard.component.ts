import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/module/passenger';

@Component({
  selector: 'app-airling-dashboard',
  templateUrl: './airling-dashboard.component.html',
  styleUrls: ['./airling-dashboard.component.scss']
})
export class AirlingDashboardComponent implements OnInit {
  public countCheck!: number;
  
  passengers :Ipassenger[]= [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 6,
    fullname: 'Harry',
    checkedIn: false,
    checkInDate: null,
    children:  [{ name: 'deny', age: 7 }]
  }];
  constructor() { }

  ngOnInit(): void {
    this.countCheck = this.passengers.filter(ele=>{
      return ele.checkedIn
    }).length
  }

  receivedObjFromCard(eve :Ipassenger){
    this.passengers.forEach((value,index)=>{
      if(value==eve) this.passengers.splice(index,1);
  })

  this.countCheck = this.passengers.filter(ele=>{
    return ele.checkedIn
  }).length
  
}
}
