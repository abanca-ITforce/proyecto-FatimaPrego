import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint = 'https://api.worldbank.org/v2/country';
  private format = '?per_page=1000&format=json';
  private regionUrl = 'https://api.worldbank.org/v2/region';
  private countryRegionUrl = 'https://api.worldbank.org/v2/country?region=';
  private endRegionUrl = '&per_page=1000&format=json';

  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.endPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountryById$(countryId) {
    const url = this.endPoint + '/' + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getAllRegions$() {
    const url = this.regionUrl + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountriesByRegionCode$(regionCode){
    //console.log(regionCode);
    const url = this.countryRegionUrl + regionCode + this.endRegionUrl;
    //console.log(url);
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getRegionByCode$(regionCode){
    const url = this.regionUrl + '/' + regionCode + this.format;
    //console.log(url);
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getIncomingLevel$(){
    const url = 'https://api.worldbank.org/v2/incomeLevel/?format=json';
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountriesByIncomingSelect$(incomingId){
    //console.log(incomingId);
    const url = this.endPoint + '?incomeLevel=' + incomingId + this.endRegionUrl;
    console.log(url);
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }
}
