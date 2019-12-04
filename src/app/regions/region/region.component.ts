import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regionCountries$: Observable<any>;
  region$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.regionCode);
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    this.regionCountries$ = this.api.getCountriesByRegionCode$(regionCode);
    this.region$ = this.api.getRegionByCode$(regionCode);
  }
}
