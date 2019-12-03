import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataCountriesService {
  private urlCountry =
    "https://api.worldbank.org/v2/country?per_page=1000&format=json";
  countryList: any[];

  private urlOneCountry = "https://api.worldbank.org/v2/country/";

  constructor(
    private httpCountry: HttpClient,
    private httpOneCountry: HttpClient
  ) {}

  getCoutries$() {
    return this.httpCountry
      .get<any[]>(this.urlCountry)
      .pipe(map(data => (this.countryList = data[1])));
  }

  getCountryById$(id) {
    const endJSON = '?per_page=1000&format=json';
    //const http = this.urlOneCountry + id + "?per_page=1000&format=json";
    //console.log(http);
    return this.httpOneCountry
      .get<any>(this.urlOneCountry + id + endJSON)
      .pipe(map(data => data[1]), map(data => data[0]));

  }

}
