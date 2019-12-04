import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SearchComponent, SearchCardComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatCardModule,
    MatSelectModule,
    SharedModule
  ]
})
export class SearchModule { }
