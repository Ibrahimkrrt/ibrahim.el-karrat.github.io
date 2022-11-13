import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillboardComponent } from './billboard.component';

const COMPONENTS = [BillboardComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class BillboardModule {}
