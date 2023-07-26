import { Component,Input } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-circle',
  template: `
  <h1 mat-dialog-title>Delete file</h1>
  <div mat-dialog-content>
    {{data.circleName}}
  </div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>No</button>
    <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
  </div>
  `,
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: {circleName: string}) {
    
  }

}
