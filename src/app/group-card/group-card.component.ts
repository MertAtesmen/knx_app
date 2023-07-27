import { Component,Input, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CircleComponent } from '../circle/circle.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-group-card',
  template: `
    <button  class="group-card-row" (click)="showDialog();" >
      <div class="group-card-name">{{name.replaceAll("_"," ")}}</div>
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
    this.icon = getIconString(this.name);
  }

  static lock : Boolean = false;

  showDialog():void{

    if(GroupCardComponent.lock)  {
      return;
    }

    GroupCardComponent.lock = true;

    const config = new MatDialogConfig();

    config.data = {
      name : this.name,
      address:this.address,
      dpts : this.dpts,
      icon: this.icon
    };
    config.position={
      top:"0px",
      left:"0px",
    }


    const dialogRef = this.dialog.open(DialogComponent,config)

    dialogRef.afterClosed().subscribe(()=>GroupCardComponent.lock = false);
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