import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {switchMap, distinctUntilChanged, debounceTime} from 'rxjs/operators';



@Injectable()
export class SearchService {

    baseUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
    searchUrl = '';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.pipe(debounceTime(400),
          distinctUntilChanged(),
          switchMap(term => this.searchEntries(term))
        );
      }

      searchEntries(term) {
        return this.http.get(this.baseUrl + term);
      }
    }
