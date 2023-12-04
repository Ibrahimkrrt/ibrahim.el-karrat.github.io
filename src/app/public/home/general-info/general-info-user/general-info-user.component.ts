import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-general-info-user',
  templateUrl: './general-info-user.component.html',
  styleUrls: ['./general-info-user.component.scss'],
})
export class GeneralInfoUserComponent implements OnInit {
  public residence: string = 'France';
  public city: string = 'Paris';
  public dateOfBirth: Date = new Date(1996, 1, 22, 19);
  public years: Observable<number> = new Observable<number>();
  public months: Observable<number> = new Observable<number>();
  public seconds: Observable<number> = new Observable<number>();

  ngOnInit() {
    const birthday = new Date(this.dateOfBirth);
    const currentDateTime$ = interval(1000).pipe(
      map(() => new Date()),
      startWith(new Date()) // Emit the initial date immediately
    );

    this.years = currentDateTime$.pipe(
      map(currentDate => this.calculateYears(birthday, currentDate))
    );

    this.months = currentDateTime$.pipe(
      map(currentDate => this.calculateMonths(birthday, currentDate))
    );

    this.seconds = currentDateTime$.pipe(
      map(currentDate => this.calculateSeconds(birthday, currentDate))
    );
  }

  calculateYears(dateOfBirth: Date, currentDate: Date): number {
    const diff = currentDate.getTime() - dateOfBirth.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  }

  calculateMonths(dateOfBirth: Date, currentDate: Date): number {
    const diff = currentDate.getTime() - dateOfBirth.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const remaining = diff - years * 1000 * 60 * 60 * 24 * 365;
    return Math.floor(remaining / (1000 * 60 * 60 * 24 * 30));
  }

  calculateSeconds(dateOfBirth: Date, currentDate: Date): number {
    const diff = Math.abs(currentDate.getTime() - dateOfBirth.getTime()) / 1000;
    return Math.floor(diff % 60);
  }
}
