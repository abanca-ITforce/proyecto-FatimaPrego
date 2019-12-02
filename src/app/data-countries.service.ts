import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataCountriesService {
  private urlCountry =
    'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  countryList: any[];

  constructor(private httpCountry: HttpClient) {}

  getCoutries$() {
    return this.httpCountry
      .get<any[]>(this.urlCountry)
      .pipe(map(data => (this.countryList = data[1])));
  }
}
