import { Component, Inject } from '@angular/core';
import { XMLParser } from 'fast-xml-parser';
import { GroupCardComponent } from './group-card/group-card.component';
import { MainComponent } from './main/main.component';
import { HttpClient } from '@angular/common/http';
import {Dpst_1_1} from "./group-address";
import { getText } from './utils';

@Component({
  selector: 'app-root',
  template:`
    <button (click)="a()">On Test</button>
    <button (click)="onClickGetDpstsTexts()">On Click Type Test</button>
    <button (click)="onClickTest()">On Click Test</button>
    <button (click)="changeOption(0);">0</button>
    <button (click)="changeOption(1);">1</button>
    <button (click)="changeOption(2);">2</button>
    <button (click)="changeOption(3);">3</button>
    
    <app-main [option]="option" [groupAddresses]="groupAddresses"/>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_knx';
  option:number = 0;

  a():void{
    console.log(getText("Dpst-1-12"));
  }

  ngOnInit(): void {
    this.httpClient.get('assets/datatypes.json', {responseType:'text'})
    .subscribe(
      (data)=>{
        dataTypes = {};
        dataTypes = JSON.parse(data);
        console.log(dataTypes);
      }
    );
  }


  onClickGetDpstsTexts(): void{
    const indexes = [
      [1,1],
      [1,2],
      [1,3],
      [1,8],
      [1,100],
      [5,1],
      [5,10],
      [9,1],
      [9,7],
      [18,1],
      [20,102]
    ]

    
    let textList = [];
   
    
    for (let index = 0; index < indexes.length; index++) {
      const val = indexes[index];

      const data = dataTypes[val[0]-1]["DatapointSubtypes"]["DatapointSubtype"];

      const a = "";

      if(data.length === undefined){
        
        textList.push(data["Text"]);
      }
      else{
        try{
        textList.push(data.find((value:any,i:any,arr:any)=>(value["Id"] as string).startsWith(
          `DPST-${val[0]}-${val[1]}`))["Text"]);
        }catch(e){
          console.log(`DPST-${val[0]}-${val[1]}`);
        }
      }
    }
   
    console.log(textList);
  }

  onClickTest() : void {
    const options = {
      attributeNamePrefix : "",
      ignoreAttributes : false,
      ignoreNameSpace: false,
    };
    const parser = new XMLParser(options);

    this.httpClient.get('assets/datatypes.json', {responseType: 'text'})
        .subscribe(data => 
          {
            const obj = JSON.parse(data);
            console.log(obj);
            console.log(obj[0].DatapointSubtypes.DatapointSubtype);

            const dataSubTypes = obj[0].DatapointSubtypes.DatapointSubtype;

            let size = 8;

            let file : Array<string> = [];

            dataSubTypes.forEach((dataSubType:any)=>
            {

              let bit = dataSubType.Format.Bit;


              file.push(
                `const ${ (dataSubType.Id as string).replaceAll("-","_") }: DPST =  {
                  type: 'Enumeration',
                  sizeInBit: 1,
                  basicName: "${dataSubType["Name"]}",
                  explicitName: "${dataSubType["Text"]}",
                  enumeration:
                    [
                      "${bit.Cleared}",
                      "${bit.Set}"
                    ],
                  minValue: null,
                  maxValue: null,
                  coefficient: null,
                  unit: null,
                }
                
                `);             
            });
          

            console.log(file.join(""));
          });  
  }
  
  changeOption(option:number):void{
    this.option = option;
    console.log("Option: "+option);
  }
  groupAddresses:Array<any>;
  constructor(private httpClient: HttpClient){

    const options = {
      attributeNamePrefix : "",
      ignoreAttributes : false,
      ignoreNameSpace: false,
    };
    const parser = new XMLParser(options);
    const obj = parser.parse(XML);
    this.groupAddresses = obj["GroupAddress-Export"]["GroupRange"]["GroupRange"][0]["GroupAddress"];

    console.log(JSON.stringify(this.groupAddresses));

  }
}

export let dataTypes: any = null;


// 6 7 8

const XML=`
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<GroupAddress-Export xmlns="http://knx.org/xml/ga-export/01">
  <GroupRange Name="Display Box" RangeStart="1" RangeEnd="2047">
    <GroupRange Name="Display Box" RangeStart="1" RangeEnd="255">
      <GroupAddress Name="Light_Sw" Address="0/0/1" DPTs="DPST-1-1" />
      <GroupAddress Name="Light_Status" Address="0/0/2" DPTs="DPST-1-1" />
      <GroupAddress Name="Shutter_UP/DOWN" Address="0/0/3" DPTs="DPST-1-8" />
      <GroupAddress Name="Shutter_Stop" Address="0/0/4" DPTs="DPST-1-8" />
      <GroupAddress Name="Shutter_Position" Address="0/0/5" DPTs="DPST-5-1" />
      <GroupAddress Name="Actual_Temperature" Address="0/0/6" DPTs="DPST-9-1" />
      <GroupAddress Name="Operation_Mode_Sw_Over" Address="0/0/7" DPTs="DPST-20-102" />
      <GroupAddress Name="Operation_Mode_Sw_Over_Status" Address="0/0/8" DPTs="DPST-20-102" />
      <GroupAddress Name="Command_Value_for_Heating" Address="0/0/9" DPTs="DPST-5-1" />
      <GroupAddress Name="Command_Value_for_Cooling" Address="0/0/10" DPTs="DPST-5-1" />
      <GroupAddress Name="Heating/Cooling_ChangeOver" Address="0/0/11" DPTs="DPST-1-100" />
      <GroupAddress Name="Actual_Setpoint" Address="0/0/12" DPTs="DPST-9-1" />
      <GroupAddress Name="Manual_Setpoint" Address="0/0/13" DPTs="DPST-9-1" />
      <GroupAddress Name="FanCoil_SW" Address="0/0/14" DPTs="DPST-1-2" />
      <GroupAddress Name="FanCoil_Sw_Status" Address="0/0/15" DPTs="DPST-1-1" />
      <GroupAddress Name="FanLevel_Status" Address="0/0/16" DPTs="DPST-5-1" />
      <GroupAddress Name="Fan Speed Enumared" Address="0/0/17" DPTs="DPST-5-1" />
      <GroupAddress Name="Fan Speed Feedback" Address="0/0/18" DPTs="DPST-5-10" />
      <GroupAddress Name="Auto/Manual" Address="0/0/19" DPTs="DPST-1-2" />
      <GroupAddress Name="Auto/Manual_Status" Address="0/0/20" DPTs="DPST-1-2" />
      <GroupAddress Name="Scene" Address="0/0/21" DPTs="DPST-18-1" />
      <GroupAddress Name="SW Light2" Address="0/0/22" DPTs="DPST-1-1" />
      <GroupAddress Name="SW FB Light2" Address="0/0/23" DPTs="DPST-1-1" />
      <GroupAddress Name="SW Light3" Address="0/0/24" DPTs="DPST-1-1" />
      <GroupAddress Name="SW FB Light3" Address="0/0/25" DPTs="DPST-1-1" />
      <GroupAddress Name="Actual Temperature" Address="0/0/26" DPTs="DPST-9-1" />
      <GroupAddress Name="Actual Humudity" Address="0/0/27" DPTs="DPST-9-7" />
      <GroupAddress Name="Climate On/Off" Address="0/0/28" DPTs="DPST-1-1" />
      <GroupAddress Name="Climate On/Off FB" Address="0/0/29" DPTs="DPST-1-1" />
      <GroupAddress Name="Setpoint Temperature" Address="0/0/30" DPTs="DPST-9-1" />
      <GroupAddress Name="Sensor Lock" Address="0/0/31" DPTs="DPST-1-3" />
      <GroupAddress Name="Alarm" Address="0/0/32" DPTs="DPST-1-1" />
    </GroupRange>
    <GroupRange Name="Dali" RangeStart="256" RangeEnd="511">
      <GroupAddress Name="SW Group 1" Address="0/1/0" DPTs="DPST-1-1" />
      <GroupAddress Name="Dim Group 1" Address="0/1/1" DPTs="DPST-3-7" />
      <GroupAddress Name="Value Group 1" Address="0/1/2" DPTs="DPST-5-1" />
      <GroupAddress Name="SW FB Group 1" Address="0/1/3" DPTs="DPST-1-1" />
      <GroupAddress Name="Value FB Group 1" Address="0/1/4" DPTs="DPST-5-1" />
      <GroupAddress Name="Fault Group 1" Address="0/1/5" DPTs="DPST-1-5" />
      <GroupAddress Name="SW Group 2" Address="0/1/7" DPTs="DPST-1-1" />
      <GroupAddress Name="Dim Group 2" Address="0/1/8" DPTs="DPST-3-7" />
      <GroupAddress Name="Value Group 2" Address="0/1/9" DPTs="DPST-5-1" />
      <GroupAddress Name="SW FB Group 2" Address="0/1/10" DPTs="DPST-1-1" />
      <GroupAddress Name="Value FB Group 2" Address="0/1/11" DPTs="DPST-5-1" />
      <GroupAddress Name="Fault Group 2" Address="0/1/12" DPTs="DPST-1-5" />
      <GroupAddress Name="SW Group 3" Address="0/1/14" DPTs="DPST-1-1" />
      <GroupAddress Name="Dim Group 3" Address="0/1/15" DPTs="DPST-3-7" />
      <GroupAddress Name="Value Group 3" Address="0/1/16" DPTs="DPST-5-1" />
      <GroupAddress Name="SW FB Group 3" Address="0/1/17" DPTs="DPST-1-1" />
      <GroupAddress Name="Value FB Group 3" Address="0/1/18" DPTs="DPST-5-1" />
      <GroupAddress Name="Fault Group 3" Address="0/1/19" DPTs="DPST-1-5" />
      <GroupAddress Name="SW Group 4" Address="0/1/21" DPTs="DPST-1-1" />
      <GroupAddress Name="Dim Group 4" Address="0/1/22" DPTs="DPST-3-7" />
      <GroupAddress Name="Value Group 4" Address="0/1/23" DPTs="DPST-5-1" />
      <GroupAddress Name="SW FB Group 4" Address="0/1/24" DPTs="DPST-1-1" />
      <GroupAddress Name="Value FB Group 4" Address="0/1/25" DPTs="DPST-5-1" />
      <GroupAddress Name="Fault Group 4" Address="0/1/26" DPTs="DPST-1-5" />
    </GroupRange>
  </GroupRange>
</GroupAddress-Export>
`