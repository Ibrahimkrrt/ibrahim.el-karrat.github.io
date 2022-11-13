import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info-user',
  templateUrl: './general-info-user.component.html',
  styleUrls: ['./general-info-user.component.scss']
})
export class GeneralInfoUserComponent implements OnInit {
  public residence: string = 'France'
  public city: string = 'Paris'
  public age: string = '26'
  
  constructor() { }

  ngOnInit() {
  }

}
