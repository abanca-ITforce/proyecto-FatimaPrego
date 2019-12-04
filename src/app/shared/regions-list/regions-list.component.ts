import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
@Input() regions: any[];
@Input() isAbsolute = true;

  constructor() { }

  ngOnInit() {
  }

}
