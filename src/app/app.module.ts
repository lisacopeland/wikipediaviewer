import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
    MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatPaginatorModule, MatRadioModule, MatSortModule, MatSelectModule,
    MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatFormFieldModule
  } from '@angular/material';

import { AppComponent } from './app.component';

import { SearchService } from './search.service';

/**
 * App module for the application
 *
 * @export
 * @class AppModule
 */
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        SearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
