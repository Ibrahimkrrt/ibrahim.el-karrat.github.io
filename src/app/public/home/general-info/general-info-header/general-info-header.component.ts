import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info-header',
  templateUrl: './general-info-header.component.html',
  styleUrls: ['./general-info-header.component.scss']
})
export class GeneralInfoHeaderComponent implements OnInit {
  public fullName:string = 'Ibrahim El-Karrat'
  public skills:string[] = [
    'Font-end Developper',
    'Back-end Developper',
    'Cloud',
  ]
  constructor() { }

  ngOnInit() {
  }

}
