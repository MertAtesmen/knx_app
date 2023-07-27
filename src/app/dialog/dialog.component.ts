import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
  <div class="matDialogContainer">
    <h1 mat-dialog-title> {{data.name}}</h1>
    <div mat-dialog-content> 
      <mat-icon>{{data.icon}} </mat-icon>
      <button (click)="submit(inputString)">Submit</button>
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
  ) { }
}

