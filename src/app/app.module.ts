import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { IndicatorListComponent } from './indicator-list/indicator-list.component';
import { IndicatorComponent } from './indicator-list/indicator/indicator.component';
import { LevelComponent } from './indicator-list/indicator/level/level.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './_services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorListComponent,
    IndicatorComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
