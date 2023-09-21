import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-main',
  template:`
  <div class="groupAddressGrid">
    <ng-template [ngIf]="option===0" >
      <div *ngFor="let groupAddress of group0; let i = index" [ngStyle]="{'grid-column':i%4,'grid-row':a(i)}">
         <app-group-card 
          [name]="groupAddress.Name"
          [address]="groupAddress.Address" 
          [dpts]="groupAddress.DPTs" />
      </div>
    </ng-template>
    <ng-template [ngIf]="option===1">
      <div *ngFor="let groupAddress of group1; let i = index" [ngStyle]="{'grid-column':i%4,'grid-row':a(i)}">
         <app-group-card 
          [name]="groupAddress.Name"
          [address]="groupAddress.Address" 
          [dpts]="groupAddress.DPTs" />
      </div>
    </ng-template>
    <ng-template [ngIf]="option===2">
      <div *ngFor="let groupAddress of group2; let i = index" [ngStyle]="{'grid-column':i%4,'grid-row':a(i)}">
        <app-group-card 
          [name]="groupAddress.Name"
          [address]="groupAddress.Address" 
          [dpts]="groupAddress.DPTs" />
      </div>
    </ng-template> 
    <ng-template [ngIf]="option===3">
      <div *ngFor="let groupAddress of groupAddresses; let i = index" [ngStyle]="{'grid-column':(i%4)+1,'grid-row':a(i) + 1}">
        <app-group-card 
          [name]="groupAddress.Name"
          [address]="groupAddress.Address" 
          [dpts]="groupAddress.DPTs" />
      </div>
    </ng-template> 
  </div>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() option!:number;
  @Input() groupAddresses:Array<any> = [];
  group0:Array<any> = [];
  group1:Array<any> = [];

  group2:Array<any> = [];

  a(index : number) : number{
    return  Math.trunc(index/4);
  }

  constructor(){
    console.log("The option is : " + this.option);
  }
  ngOnInit(): void {

    const set: Set<string> = new Set(this.groupAddresses.sort().map((val,index,a) => val.DPTs));

    console.log(set.entries());
    
    console.log("The array is:");
    console.log(this.groupAddresses)
    this.group0 = this.groupAddresses.filter((val,index,arr)=>index%3==0);
    this.group1 = this.groupAddresses.filter((val,index,arr)=>index%3==1);
    this.group2 = this.groupAddresses.filter((val,index,arr)=>index%3==2);
  }

}
