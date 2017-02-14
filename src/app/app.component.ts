import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Http } from '@angular/http';

import { Framework } from './models/framework';
import { Language } from './models/language';
import { Person } from './models/person';
import { Project } from './models/project';
import { Submit } from './models/submit';


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
  personValue: any;


  // Second tab: experience
  languages: Language[];
  javascriptFramework: string[] = ["jQuery", "Bootstrap", "Angular", "Ember", "Meteor", "Backbone"];
  netFramework: string[] = ["Webforms", "MVC", "Razor", "Webpages", "Orchard", "Umbraco", "DotNetNUke", "SharePoint"];
  pythonFramework: string[] = ["Django", "Pyramid", "CherryPy"];
  rubyFramework: string[] = ["Ruby on Rails", "Rack", "Sinatra"];
  javaFramework: string[] = ["JSP", "JSF", "Spring", "Vadiin", "Struts"];
  javaServers: string[] = ["Tomcat", "JBoss", "WebPhere", "Weblogic", "Glassfish"];

  languagesValue: any;

  // Third tab: project
  projects: Project[];
  projectsValue: any;

  constructor(private fb: FormBuilder, private http: Http) {

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



  onPersonChanged(value) {
    this.personValue = value;
    console.log(value);
  }

  onExperienceChanged(value) {
    this.languagesValue = value;
    console.log(value);
  }

  onProjectsChanged(value) {
    this.projectsValue = value;
    console.log(value);
  }

  submit() {
    let submitData = new Submit(this.personValue, this.languagesValue, this.projectsValue);
  }

}
