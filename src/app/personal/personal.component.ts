import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

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
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      phone: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      skype: ['', Validators.required],
      educations: this.fb.array([this.buildEducation()])
    });
  }

  buildEducation(): FormGroup {
    return this.fb.group({
      education: ['', Validators.required]
    });
  }

  get educations(): FormArray {
    return <FormArray>this.personForm.get('educations');
  }

  addEducation() {
    this.educations.push(this.buildEducation());
  }

}
