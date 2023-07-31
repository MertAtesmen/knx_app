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
      <button (click)="submit(inputString)" matDialogClose>Submit</button>
    </div>
    <div matDialogActions>
      <button matDialogClose="s">Close</button>
    </div>
  </div>
  `,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  inputString:string="";
  dpstText:string = "";

  onKeyDown():void{
    if(this.inputString.length >9){
       this.inputString = ""
    }
  }

  submit(input:string) : void{
    console.log(this.data.name);
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
   }
}

