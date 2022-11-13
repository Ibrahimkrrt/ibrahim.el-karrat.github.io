import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info-skills',
  templateUrl: './general-info-skills.component.html',
  styleUrls: ['./general-info-skills.component.scss'],
})
export class GeneralInfoSkillsComponent implements OnInit {
  public skills: {domane:string,level:number}[] = [
    {domane:'Angular',level: 99},
    {domane:'.Net',level: 90},
    {domane:'T-SQL',level: 85},
    {domane:'Terraform (IAC)',level: 70},
    {domane:'Portal Azure',level: 80},
  ];
  constructor() {}

  ngOnInit() {}
}
