import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { GeneralInfoModule } from './general-info/general-info.module';
import { MenuModule } from './menu/menu.module';
import { BillboardModule } from './billboard/billboard.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    GeneralInfoModule,
    BillboardModule,
    MenuModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
