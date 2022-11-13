import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info.component';
import { GeneralInfoHeaderComponent } from './general-info-header/general-info-header.component';
import { GeneralInfoUserComponent } from './general-info-user/general-info-user.component';
import { GeneralInfoLanguagesComponent } from './general-info-languages/general-info-languages.component';
import { GeneralInfoSkillsComponent } from './general-info-skills/general-info-skills.component';
import { RingProgressBarModule } from 'src/app/common/components/progress-bar/ring-progress-bar/ring-progress-bar.module';
import { PipeProgressBarModule } from 'src/app/common/components/progress-bar/pipe-progress-bar/pipe-progress-bar.module';

const COMPONENTS = [
  GeneralInfoComponent,
  GeneralInfoHeaderComponent,
  GeneralInfoUserComponent,
  GeneralInfoLanguagesComponent,
  GeneralInfoSkillsComponent,
];

@NgModule({
  imports: [CommonModule, RingProgressBarModule, PipeProgressBarModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class GeneralInfoModule {}
