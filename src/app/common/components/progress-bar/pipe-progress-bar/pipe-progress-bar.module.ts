import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeProgressBarComponent } from './pipe-progress-bar.component';

const COMPONENTS = [PipeProgressBarComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class PipeProgressBarModule {}
