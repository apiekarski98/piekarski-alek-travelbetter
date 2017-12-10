import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  api = {
    'searchCities': this.searchCities
  };

  searchCities(search: String) {
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + search +
      '&types=(cities)&key=AIzaSyBfjdSegPe_ofqhmaM5ZtGcfRFmEdo1tJk';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
