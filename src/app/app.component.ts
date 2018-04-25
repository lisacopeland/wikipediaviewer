import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatIconModule, MatListModule } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from './search.service';

/**
 * the app component
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  buttonClicked = false;
  results: Object;
  subscription: Subscription;
  linksArray = [];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
          // console.log('hi from app component searchservice.search, got back');
          // console.log(results);
          this.linksArray = results[3];
          // console.log('linksArray = ' + this.linksArray);

      });
  }

  ngOnInit() {

  }

}
