import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { Framework } from './models/framework';
import { Language } from './models/language';
import { Person } from './models/person';
import { Project } from './models/project';


const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Declare variables
   */

  // First tab: personal and education
  person: Person;
  personForm: FormGroup;

  // Second tab: technology
  languages: Language[];
  javascriptFramework: string[] = ["jQuery", "Bootstrap", "Angular", "Ember", "Meteor", "Backbone"];
  netFramework: string[] = ["Webforms", "MVC", "Razor", "Webpages", "Orchard", "Umbraco", "DotNetNUke", "SharePoint"];
  pythonFramework: string[] = ["Django", "Pyramid", "CherryPy"];
  rubyFramework: string[] = ["Ruby on Rails", "Rack", "Sinatra"];
  javaFramework: string[] = ["JSP", "JSF", "Spring", "Vadiin", "Struts"];
  javaServers: string[] = ["Tomcat", "JBoss", "WebPhere", "Weblogic", "Glassfish"];

  // Third tab: project
  projects: Project[];


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    // First tab: personal and education
    this.person = new Person();

    this.personForm = this.fb.group({
      name: '',
      birthday: '',
      email: '',
      phone: '',
      skype: '',
      educations: this.fb.array([this.buildEducation()])
    });



    // Second tab: technology
    this.languages = [
      new Language("HTML/CSS", []),
      new Language("Javascript", this.javascriptFramework),
      new Language(".NET", this.netFramework),
      new Language("Python", this.pythonFramework),
      new Language("Ruby", this.rubyFramework),
      new Language("Java", this.javaFramework),
      new Language("Java Servers", this.javaServers)
    ];

    // Third tab: projects
    this.projects = [new Project(), new Project()];
  }




  // First tab: personal and education
  buildEducation(): FormGroup {
    return this.fb.group({
      education: ""
    });
  }

  addEducation() {
    console.log(this.person.educations.length);
  }

  get educations(): FormArray {
    return <FormArray>this.personForm.get('educations');
  }

  validatePersonal() {
    console.log("Validate personal >>");
  }

  validateEducation() {
    console.log("Validate education >>");
  }


}
