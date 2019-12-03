import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CountriesListComponent, RegionsListComponent],
  imports: [CommonModule, MatListModule, RouterModule, MatDividerModule, MatCardModule],
  exports: [CountriesListComponent, RegionsListComponent]
})
export class SharedModule {}
