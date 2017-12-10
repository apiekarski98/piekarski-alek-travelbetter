import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchService} from "../../services/search.service.client";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;

  searchTerm: String;
  cities: {};

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchTerm = '';
  }

  search() {
    if (this.searchForm.value.searchTerm.length > 0) {
      this.searchTerm = this.searchForm.value.searchTerm;
    }
    this.searchService.searchCities(this.searchTerm)
      .subscribe((cities) => {
        this.cities = cities;
        console.log(cities);
      });
  }

}
