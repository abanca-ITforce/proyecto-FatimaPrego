import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CountryModule { }
