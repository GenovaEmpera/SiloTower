import { Injectable } from '@angular/core';
import { Indicator } from '../_models/indicator.module';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const indicators = [
      new Indicator({
        "id": "1",
        "title": "Уровень карналлита в силосной башне №1",
        "value": 98,
        "minValue": 0,
        "maxValue": 1087
      }),
      new Indicator({
        "id": "2",
        "title": "Уровень карналлита в силосной башне №2",
        "value": 60,
        "minValue": 0,
        "maxValue": 1663
      }),
      new Indicator({
        "id": "3",
        "title": "Уровень карналлита в силосной башне №3",
        "value": 38,
        "minValue": 0,
        "maxValue": 1521
      }),
      new Indicator({
        "id": "4",
        "title": "Уровень карналлита в силосной башне №4",
        "value": 79,
        "minValue": 0,
        "maxValue": 1224
      }),
      new Indicator({
        "id": "5",
        "title": "Уровень карналлита в силосной башне №5",
        "value": 99,
        "minValue": 0,
        "maxValue": 1379
      }),
      new Indicator({
        "id": "6",
        "title": "Уровень карналлита в силосной башне №6",
        "value": 60,
        "minValue": 0,
        "maxValue": 1905
      }),
      new Indicator({
        "id": "7",
        "title": "Уровень карналлита в силосной башне №7",
        "value": 51,
        "minValue": 0,
        "maxValue": 1678
      }),
      new Indicator({
        "id": "8",
        "title": "Уровень карналлита в силосной башне №8",
        "value": 60,
        "minValue": 0,
        "maxValue": 1593
      })
    ];
    return { indicators };
  }
}
