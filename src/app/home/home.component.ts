import { Component, OnInit } from "@angular/core";
import { DataCountriesService } from "../data-countries.service";
import { Observable } from "rxjs";

@Component({
  selector: "ab-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  countryList$: Observable<any[]>;

  constructor(private dataService: DataCountriesService) {
    this.countryList$ = this.dataService.getCoutries$();
  }

  ngOnInit() {}
}
