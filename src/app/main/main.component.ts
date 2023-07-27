import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  template:`
    <ng-template [ngIf]="option===0" class="groupAddressGrid">
      <div *ngFor="let groupAddress of group0">
        <app-group-card [name]="groupAddress.Name" [address]="groupAddress.Address" [dpts]="groupAddress.DPTs" />
      </div>
    </ng-template>
    <ng-template [ngIf]="option===1" class="groupAddressGrid">
      <div *ngFor="let groupAddress of group1">
       <app-group-card [name]="groupAddress.Name" [address]="groupAddress.Address" [dpts]="groupAddress.DPTs" /> 
      </div>
    </ng-template>
    <ng-template [ngIf]="option===2" class="groupAddressGrid">
      <div *ngFor="let groupAddress of group2"> 
        <app-group-card [name]="groupAddress.Name" [address]="groupAddress.Address" [dpts]="groupAddress.DPTs"/>
      </div>
    </ng-template> 
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() option!:number;
  @Input() groupAddresses:Array<any> = [];
  group0:Array<any> = [];
  group1:Array<any> = [];

  group2:Array<any> = [];


  constructor(){
    console.log("The option is : " + this.option);
  }
  ngOnInit(): void {
    console.log("The array is:");
    console.log(this.groupAddresses)
    this.group0 = this.groupAddresses.filter((val,index,arr)=>index%3==0);
    this.group1 = this.groupAddresses.filter((val,index,arr)=>index%3==1);
    this.group2 = this.groupAddresses.filter((val,index,arr)=>index%3==2);
  }

}
