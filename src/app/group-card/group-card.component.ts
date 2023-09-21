import { Component, Input, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { getText } from '../utils';

@Component({
  selector: 'app-group-card',
  template: `
    <button class="group-card-row" (click)="showDialog()">
      <div class="group-card-name">{{ name.replaceAll('_', ' ') }}</div>
      <ng-icon [name]="icon" class="group-card-icon"></ng-icon>
    </button>
  `,
  styleUrls: ['./group-card.component.css'],
})
export class GroupCardComponent {
  @Input() name: any = 'None';
  @Input() address: any = 'None';
  @Input() dpts: any = 'None';
  icon: string = 'matSettings';
  dpstText: string | null = null;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (
      this.address === 'None' ||
      this.name === 'None' ||
      this.name === 'None'
    ) {
      throw Error('You forgot to enter some value');
    }
    this.icon = this.getIconString(this.name, this.dpts);
  }

  static lock: Boolean = false;

  showDialog(): void {
    if (GroupCardComponent.lock) {
      return;
    }

      GroupCardComponent.lock = true;
    
    const config = new MatDialogConfig();
    
    config.data = {
      name: this.name,
      address: this.address,
      dpts: this.dpts,
      icon: this.icon,
    };

    config.position = {
      top: '0px',
      left: '0px',
    };

    

    const dialogRef = this.dialog.open(DialogComponent, config);

    dialogRef.afterClosed().subscribe(() => (GroupCardComponent.lock = false));
  }

  getIconString(name: string, dpst: string): string {
    this.dpstText = getText(dpst);

    console.log(this.name, this.dpstText, dpst);

    if (name.match(new RegExp('Li?ght', 'i'))) {
      return 'matLightbulb';
    }
    if (name.match(new RegExp('Temp', 'i'))) {
      return 'matThermostat';
    }
    if (name.match(new RegExp('alarm', 'i'))) {
      return 'matAlarm';
    }
    if (name.match(new RegExp('cool|cold', 'i'))) {
      return 'matAcUnit';
    }
    if (name.match(new RegExp('heat|hot', 'i'))) {
      return 'matWhatshot';
    }
    if (name.match(new RegExp('climate', 'i'))) {
      return 'matThermostat';
    }
    if (name.match(new RegExp('Fan', 'i'))) {
      return 'bootstrapWind';
    }

    if (this.dpstText !== null) {
      if (this.dpstText.match(/temperature/i)) {
        return 'matThermostat';
      }
      if (this.dpstText.match(/cooling\/heating/i)) {
        return 'matThermostat';
      }
      if (this.dpstText.match(/date/i)) {
        return 'bootstrapCalendar';
      }
      if (this.dpstText.match(/up\/down/)) {
        return 'bootstrapArrowDownUp';
      }
    }
    return 'matSettings';
  }
}
