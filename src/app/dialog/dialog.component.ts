import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { getText } from '../utils';


@Component({
  selector: 'app-dialog',
  template: `
  <div class="matDialogContainer">
    <h1 mat-dialog-title> {{data.name}}</h1>
    <div mat-dialog-content> 
      <ng-icon [name] = "data.icon"></ng-icon>
      <div>{{ dpstText }}</div>
      <button (click)="submit(inputString,true)" matDialogClose>On</button>
      <button (click)="submit(inputString,false)" matDialogClose>Off</button>

    </div>
    <div matDialogActions>
      <button matDialogClose="s">Close</button>
    </div>
  </div>
  `,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  dpstText:string = "";
  inputString:string="";
  dpstBit:string;
  onKeyDown():void{
  if(this.inputString.length >9){
    this.inputString = ""
  }
  }

  submit(input:string, isOn:Boolean) : void{
    const command = `${this.dpstBit}${isOn? "1" : "0"}`;
    console.log(command);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{
      name : string,
      address : string,
      dpts : string, 
      icon : string
    }
  ) {
    this.dpstText = getText(this.data.dpts) ?? "";
    const addressBits = (this.data.address as string).split(/\/|\\/);
    let addressbit1 = parseInt(addressBits[1]).toString(16);
    let addressbit2 = parseInt(addressBits[2]).toString(16);
    if(addressbit1.length == 1){
      addressbit1 = "0" + addressbit1;
    }
    if(addressbit2.length == 1){
      addressbit2 = "0" + addressbit2;
    }
    this.dpstBit = `08BC110100${addressbit2}E1008`.toUpperCase();
   }
}

const controlField = "BC";

const temperatureVal = "0CE2";

const sourceAddress = "0000";

// 6 7 8