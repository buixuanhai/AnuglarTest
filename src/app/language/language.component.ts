import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../models/language';
import { Framework } from '../models/framework';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  @Input() frameworks: Framework[];

  @Input() language: Language;

  isSelected: boolean = false;

  ngOnInit() {
    
  }

}
