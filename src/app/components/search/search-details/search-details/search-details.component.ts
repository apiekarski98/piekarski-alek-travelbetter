import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../../services/shared.service.client";

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  name: String;
  capital: String;
  region: String;
  population: Number;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.name = this.sharedService.name;
    this.capital = this.sharedService.capital;
    this.region = this.sharedService.region;
    this.population = this.sharedService.population;
  }
}
