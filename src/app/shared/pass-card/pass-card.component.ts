import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/module/passenger';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() cardObj!:Ipassenger;
@Output() sendObjToDash : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>;
  constructor() { }
public flag:boolean =true;
  ngOnInit(): void {
  }
  onEditClick(eve:Event){
    this.flag= !this.flag;
  }
  onDoneClick(eve:Event){
    this.flag= !this.flag;
  }
  onRemoveClick(eve:Event){
    this.sendObjToDash.emit(this.cardObj)
  }

  onInput(eve : any){
    console.log(eve.target.value);

    let inputname = (eve.target as HTMLInputElement).value
    this.cardObj.fullname =inputname;
  }

}
