import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  @Input()
  projectsInput: Project[];

  @Output()
  changed = new EventEmitter<any>();
  projectsForm: FormGroup;

  ngOnInit() {

    this.projectsForm = this.fb.group({
      projects: this.fb.array(this.projectsInput.map(pr => this.buildProject()))
    });

    this.projectsForm.valueChanges.subscribe((value) => this.changed.emit(value));

  }

  buildProject(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      teamSize: ['', Validators.required],
      roleInTeam: ['', Validators.required],
      descriptionOfJob: ['', Validators.required],
      github: ['', Validators.required],
      // github: ['', [Validators.required, Validators.pattern('((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?')]]
    });
  }

  get projects(): FormArray {
    return <FormArray>this.projectsForm.get('projects');
  }

  addProject() {
    this.projects.push(this.buildProject());
  }

}
