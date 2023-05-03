import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';

import { ListComponent } from './components/list/list.component';
import { AddCountryComponent } from './components/add-country/add-country.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MundoModule { }
