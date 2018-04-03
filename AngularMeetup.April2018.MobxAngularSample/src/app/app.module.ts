import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, MatTableModule, MatCardModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { TotalComponent } from './total/total.component';
import { InputComponent } from './input/input.component';
import { Store } from './app.store';

const COMPONENTS = [AppComponent, InputComponent, SpendingsComponent, TotalComponent];

const MATERIAL_MODULES = [MatButtonModule, MatTableModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatCheckboxModule, BrowserAnimationsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule, MobxAngularModule, ...MATERIAL_MODULES, FormsModule, ReactiveFormsModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
