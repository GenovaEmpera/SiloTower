import { Component, OnInit } from '@angular/core';
import { Indicator } from '../_models/indicator.module';
import { IndicatorService } from '../_services/indicator.service';

@Component({
  selector: 'app-indicator-list',
  templateUrl: './indicator-list.component.html',
  styleUrls: ['./indicator-list.component.css']
})
export class IndicatorListComponent implements OnInit {
indicatorList: Indicator[] = [];
  constructor(private indicatorService: IndicatorService) { }

  ngOnInit() {
    this.getIndicatorList();
  }

  getIndicatorList(): void {
    this.indicatorService.getIndicatorList()
      .subscribe( list => this.indicatorList = list);
  }
}
