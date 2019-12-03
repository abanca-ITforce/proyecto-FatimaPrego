import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCountriesService } from 'src/app/data-countries.service';


@Component({
  selector: 'ab-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country$;

  constructor(activatedRoute: ActivatedRoute, dataService: DataCountriesService) {
    const countryId = activatedRoute.snapshot.params.id;
    //console.log(countryId);
    this.country$ = dataService.getCountryById$(countryId);


   }

  ngOnInit() {
  }

}
