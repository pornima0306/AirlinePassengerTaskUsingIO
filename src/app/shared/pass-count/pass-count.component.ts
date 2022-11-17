import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/module/passenger';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
@Input() getArrayFromAirline!: Ipassenger[];
@Input() totalCount!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
