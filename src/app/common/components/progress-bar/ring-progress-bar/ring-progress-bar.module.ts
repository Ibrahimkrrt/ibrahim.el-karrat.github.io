import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingProgressBarComponent } from './ring-progress-bar.component';

const COMPONENTS = [RingProgressBarComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class RingProgressBarModule {}
