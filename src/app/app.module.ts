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

@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    NgStyle,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
