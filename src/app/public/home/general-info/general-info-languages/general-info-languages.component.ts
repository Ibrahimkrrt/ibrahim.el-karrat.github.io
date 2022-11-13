import { Component, OnInit } from '@angular/core';
import { CultureLanguages } from './enums/culture-languages.enum';

@Component({
  selector: 'app-general-info-languages',
  templateUrl: './general-info-languages.component.html',
  styleUrls: ['./general-info-languages.component.scss']
})
export class GeneralInfoLanguagesComponent implements OnInit {

  public cultures: {language:CultureLanguages, level:number}[] = [
    {language : CultureLanguages.French, level : 90},
    {language : CultureLanguages.English, level : 85},
    {language : CultureLanguages.Arabic, level : 100},
    {language : CultureLanguages.Spanish, level : 30},
  ]

  constructor() { }

  ngOnInit() {
  }

}
