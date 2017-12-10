import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import * as google from "googleapis";

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  api = {
    'searchCities': this.searchCities
  };

  searchCities(searchTerm: String) {
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + searchTerm +
      '&types=(cities)&key=AIzaSyBVgF-ywjsdsWx6JMZNR0UlUL8q67wM5m8';
    return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Boston&types=(cities)&key=AIzaSyBVgF-ywjsdsWx6JMZNR0UlUL8q67wM5m8")
      .map((response: Response) => {
        return response.json();
      });
  }
}
