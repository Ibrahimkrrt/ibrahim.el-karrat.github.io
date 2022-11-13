import { Component, Input, OnInit } from '@angular/core';
import { BaseProgressBarComponent } from '../base-progress-bar.component';

@Component({
  selector: 'app-pipe-progress-bar',
  templateUrl: './pipe-progress-bar.component.html',
  styleUrls: ['./pipe-progress-bar.component.scss']
})
export class PipeProgressBarComponent extends BaseProgressBarComponent {
  @Input() label : string = ''
  public override initUI() {
    return true
  }

}
