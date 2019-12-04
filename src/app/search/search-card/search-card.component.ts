import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ab-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit{
  searchForm: FormGroup;

  @Input() incomings: any[];
  @Output() search = new EventEmitter<any>();

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      selectIncoming: [null, []]
    });
  }

  onSubmit(){
    this.search.emit(this.searchForm.value);
  }

  ngOnInit() {}


}
