import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  @Input()
  projectsInput: Project[];

  // projectForm: FormGroup;

  projectsForm: FormGroup;

  ngOnInit() {
    // this.projectForm = this.fb.group({
    //   name: '',
    //   description: '',
    //   teamSize: '',
    //   roleInTeam: '',
    //   descriptionOfJob: '',
    //   github: ''
    // });

    this.projectsForm = this.fb.group({
      projects: this.fb.array(this.projectsInput.map(pr => this.buildProject()))
    });
    console.log(this.projectsInput.length);
  }

  buildProject(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      teamSize: '',
      roleInTeam: '',
      descriptionOfJob: '',
      github: ''
    });
  }

  get projects(): FormArray {
    return <FormArray>this.projectsForm.get('projects');
  }

  addProject() {
    this.projects.push(this.buildProject());
  }

}