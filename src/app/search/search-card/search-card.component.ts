import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input() incomings: any[];

  constructor() { }

  ngOnInit() {
  }

}
