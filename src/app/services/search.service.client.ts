import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  api = {
    'searchCountries': this.searchCountries
  };

  searchCountries(searchTerm: String) {
    const url = 'https://restcountries.eu/rest/v2/name/' + searchTerm;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
