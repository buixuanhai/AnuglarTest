import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.fb.group({
      name: '',
      birthday: '',
      email: '',
      phone: '',
      skype: '',
      educations: this.fb.array([this.buildEducation()])
    });
  }

  buildEducation(): FormGroup {
    return this.fb.group({
      education: ""
    });
  }

  get educations(): FormArray {
    return <FormArray>this.personForm.get('educations');
  }

  addEducation() {
    this.educations.push(this.buildEducation());
  }

}
