import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { Language } from '../models/language';
import { Framework } from '../models/framework';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() languagesInput: Language[];

  @Output() changed = new EventEmitter<any>();

  languagesForm: FormGroup;

  ngOnInit() {

    this.languagesForm = this.fb.group({
      languages: this.fb.array(this.languagesInput.map(l => this.buildLanguage(l)))
    });

    this.languagesForm.valueChanges.subscribe(value => this.changed.emit(value));

  }

  buildLanguage(language: Language): FormGroup {
    return this.fb.group({
      name: language.name,
      isSelected: language.isSelected,
      frameworks: this.fb.array(language.frameworks.map(fr => this.buildFramework(fr)))
    });
  }

  buildFramework(framework: Framework): FormGroup {
    return this.fb.group({
      name: framework.name,
      isSelected: framework.isSelected,
      hoursOfExperience: framework.hoursOfExperience
    });
  }

  addFramework() {
  }

  get languages(): FormArray {
    return <FormArray>this.languagesForm.get('languages');
  }


}
