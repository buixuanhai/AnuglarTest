import { Component, OnInit, Input } from '@angular/core';
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

  @Input() language: Language;
  languageForm: FormGroup;

  test: any[];
  ngOnInit() {

    this.languageForm = this.fb.group({
      isSelected: this.language.isSelected,
      frameworks: this.fb.array(this.language.frameworks.map((fr) => this.buildFramework(fr)))
    });

    this.languageForm.valueChanges.subscribe(value => console.log(value));

  }

  buildFramework(framework: Framework): FormGroup {
    return this.fb.group({
      name: framework.name,
      isSelected: framework.isSelected,
      hourOfExperience: framework.hoursOfExperience
    });
  }

  get frameworks(): FormArray {
    return <FormArray>this.languageForm.get('frameworks');
  }


}
