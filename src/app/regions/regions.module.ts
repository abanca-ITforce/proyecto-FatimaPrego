import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RegionsComponent],
  imports: [
    SharedModule,
    CommonModule,
    RegionsRoutingModule,
    MatCardModule
  ]
})
export class RegionsModule { }
