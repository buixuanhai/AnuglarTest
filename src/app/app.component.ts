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


  // Second tab: experience
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


    // Second tab: experience
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



  validatePersonal() {
    console.log("Validate personal >>");
  }

  validateEducation() {
    console.log("Validate education >>");
  }

  // Second tabs: experience
  validateExperience() {
    console.log();
  }

  save() {
  }

}
