import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: '',
})
export class BaseProgressBarComponent implements OnInit {
  @Input()
  set size(size: number) {
    if (typeof size == 'number') {
      this._size = size;
      this.initUI();
    }
  }
  get size(): number {
    return this._size;
  }

  @Input()
  set value(value: number) {
    if (typeof value == 'number') {
      this._value = value < 100 ? value : 100;
    }
  }
  get value(): number {
    return this._value;
  }

  private _size: number = 50;
  private _value: number = 0;

  ngOnInit(): void {
    this.initUI();
  }

  public initUI() {
    throw new Error('You need to override initUI methode in you current component');
  }
}
