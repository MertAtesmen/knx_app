import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupCardComponent } from './group-card/group-card.component';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { bootstrapCalendar, bootstrapArrowDownUp , bootstrapWind} from '@ng-icons/bootstrap-icons'


import 
{ 
  mat10k ,matSettings , matLightbulb , matThermostat, matAcUnit,
  matAlarm,matWhatshot
} from '@ng-icons/material-icons/baseline'
import { NgIconsModule } from '@ng-icons/core';




@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    NgIconsModule.withIcons(
      {heroUsers,mat10k,matSettings,matLightbulb , matThermostat,matAcUnit ,
        matAlarm,matWhatshot, bootstrapArrowDownUp ,bootstrapCalendar,
        bootstrapWind
      }
      ),
    HttpClientModule,
    NgStyle,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
