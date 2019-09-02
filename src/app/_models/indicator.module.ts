export class Indicator {
  id: string;
  title: string;
  value: number;
  minValue: number;
  maxValue: number;

  constructor(values) {
    Object.assign(this, values);
  }
}