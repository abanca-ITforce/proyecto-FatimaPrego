import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  incomings$: Observable<any[]>;


  constructor(private api: ApiService
    ) { }

  ngOnInit() {
    this.incomings$ = this.api.getIncomingLevel$();

  }

}
