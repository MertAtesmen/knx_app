import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-group-card',
  template: `
    <div>
      <h1>{{name}}</h1>
      <p>{{address}}</p>
      <p>{{dpts}}</p>
    </div>
  `,
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() name:any = "None";
  @Input() address:any = "None";
  @Input() dpts:any = "None";
  ngOnInit(): void {
    if(this.address === "None" || this.name === "None"|| this.name === "None"){
      throw Error("You forgot to enter some value");
    }
  }
}
