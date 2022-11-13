import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ibrahim El-Karrat | Home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomeRouting {}
