import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

    baseUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
    searchUrl = '';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
          .distinctUntilChanged()
          .switchMap(term => this.searchEntries(term));
      }

      searchEntries(term) {
        this.searchUrl = term;
        return this.http
            .get(this.baseUrl + this.searchUrl)
            .map(res => {
                console.log(JSON.stringify(res));
                return res;
             });
      }
}
