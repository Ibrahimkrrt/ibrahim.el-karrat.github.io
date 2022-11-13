import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BaseProgressBarComponent } from '../base-progress-bar.component';
import { CircleLayoutService } from './helpers/circle-layout.service';

@Component({
  selector: 'app-ring-progress-bar',
  templateUrl: './ring-progress-bar.component.html',
  styleUrls: ['./ring-progress-bar.component.scss'],
  providers: [CircleLayoutService],
})
export class RingProgressBarComponent
  extends BaseProgressBarComponent
  implements OnInit
{
  @ViewChild('innerCircle', { static: true })
  public innerCircleElement!: ElementRef<any>;
  @ViewChild('progressCircle', { static: true })
  public progressCircleElement!: ElementRef<any>;

  public strokeWidth: number = 4;
  public readonly PI: number = Math.PI;

  constructor(
    private _rootElement: ElementRef,
    private _circleLayoutService: CircleLayoutService
  ) {
    super();
  }

  public override initUI() {
    this._circleLayoutService.init(
      this.size,
      this.strokeWidth,
      this._rootElement,
      this.innerCircleElement
    );
  }
}
