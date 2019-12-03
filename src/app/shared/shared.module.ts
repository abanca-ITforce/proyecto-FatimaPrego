import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CountriesListComponent],
  imports: [CommonModule, MatListModule, RouterModule, MatDividerModule],
  exports: [CountriesListComponent]
})
export class SharedModule {}
