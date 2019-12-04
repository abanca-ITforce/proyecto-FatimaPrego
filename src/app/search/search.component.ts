import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  incomings$: Observable<any[]>;
  incomingCountries$: Observable<any>;

  //falta recoger el @output


  constructor(private api: ApiService) {

    }

  ngOnInit() {
    this.incomings$ = this.api.getIncomingLevel$();
    //this.incomingCountries$ = this.api.getCountriesByIncomingSelect$();
    //pasar el id del select seleccionado

  }

}
