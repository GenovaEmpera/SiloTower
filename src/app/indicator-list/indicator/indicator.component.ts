import { Component, OnInit, Input } from '@angular/core';
import { Indicator } from 'src/app/_models/indicator.module';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
@Input() indicatorData: Indicator;
mass: number;

  ngOnInit() {
    this.getMass();
    this.getLevel();
  }

  private getMass(): void {
    this.mass = Math.round(this.indicatorData.maxValue * this.indicatorData.value / 100);
  }
  private getLevel(): void {
    const level = 390 * this.indicatorData.value / 100;
    const y = 360 - level;
    const id = +this.indicatorData.id - 1;
    document.getElementsByClassName('st7')[id].setAttribute('height', `${level}`);
    document.getElementsByClassName('st7')[id].setAttribute('y', `${y}`);
  }
}
