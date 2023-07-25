import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <div class="circle">
      {{circleName}}
    </div>
  `,
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  @Input() circleName:string = "Default Value";
}
