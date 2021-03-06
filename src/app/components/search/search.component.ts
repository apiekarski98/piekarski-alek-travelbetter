import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchService} from "../../services/search.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service.client";
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;

  searchTerm: String;
  countries: [{}];
  userLoggedIn: boolean;
  userId: String;

  constructor(private searchService: SearchService,
              private router: Router,
              private sharedService: SharedService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.searchTerm = '';
    this.loggedIn();
    if (this.userLoggedIn) {
      this.userId = this.sharedService.user._id;
    }
  }

  search() {
    if (this.searchForm.value.searchTerm.length > 0) {
      this.searchTerm = this.searchForm.value.searchTerm;
    }
    this.searchService.searchCountries(this.searchTerm)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  select(country) {
    this.sharedService.name = country.name;
    this.sharedService.capital = country.capital;
    this.sharedService.region = country.region;
    this.sharedService.population = country.population;
    this.router.navigate(['/search', country.name]);
  }

  loggedIn() {
    this.userService.loggedIn().subscribe((loggedIn) => {
      this.userLoggedIn = loggedIn;
    });
  }

  addToWishList(country) {
    this.userService.addToWishList(country, this.userId)
      .subscribe((wishlist) => {});
  }

}
