import { Component,Input, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CircleComponent } from '../circle/circle.component';

@Component({
  selector: 'app-group-card',
  template: `
    <button class="group-card-row" (click)="showDialog();">
      <div class="group-card-name">{{name}}</div>
      <mat-icon class="group-card-icon">{{icon}}</mat-icon>
  </button>
  `,
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() name:any = "None";
  @Input() address:any = "None";
  @Input() dpts:any = "None";
  icon:string = "home";

  constructor(public dialog:MatDialog){}

  ngOnInit(): void {
    if(this.address === "None" || this.name === "None"|| this.name === "None"){
      throw Error("You forgot to enter some value");
    }
    this.name = (this.name as string).replaceAll("_"," ");
    this.icon = getIconString(this.name);
  }

  showDialog():void{
    const config = new MatDialogConfig();

    config.data = {
      circleName : "NameIChoosed"
    };

    const dialogRef = this.dialog.open(CircleComponent,config)
  }

}

function getIconString(name:string) : string {
  if(name.match(new RegExp("Li?ght","i"))!= null){
    return "lightbulb";
  } 
  if(name.match(new RegExp("Temp","i")) != null){
    return "thermostat";
  }
  if(name.match(new RegExp("alarm","i"))!= null){
    return "alarm";
  }
  if(name.match(new RegExp("cool|cold","i"))){
    return "ac_unit";
  }
  if(name.match(new RegExp("heat|hot","i"))){
    return "whatshot"
  }

  return "home";
}