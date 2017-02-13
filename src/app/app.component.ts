import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Framework } from './models/framework';
import { Language } from './models/language';

const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Date picker
  model;

  isJavascript: boolean = false;
  isDotNet: boolean = false;
  isPython: boolean = false;
  isRuby: boolean = true;
  isJava: boolean = false;
  isJavaServer: boolean = false;



  // Test data
  frameworkStrings: string[] = ["jQuery", "Bootstrap", "Angular", "Ember", "Meteor", "Backbone"];
  frameworks: Framework[] = [];
  language: Language;

  languages: Language[];


  javascriptFramework: string[] = ["jQuery", "Bootstrap", "Angular", "Ember", "Meteor", "Backbone"];
  netFramework: string[] = ["Webforms", "MVC", "Razor", "Webpages", "Orchard", "Umbraco", "DotNetNUke", "SharePoint"];
  pythonFramework: string[] = ["Django", "Pyramid", "CherryPy"];
  rubyFramework: string[] = ["Ruby on Rails", "Rack", "Sinatra"];
  javaFramework: string[] = ["JSP", "JSF", "Spring", "Vadiin", "Struts"];
  javaServers: string[] = ["Tomcat", "JBoss", "WebPhere", "Weblogic", "Glassfish"];

  ngOnInit() {
    

    this.languages = [
      new Language("HTML/CSS", []),
      new Language("Javascript", this.javascriptFramework),
      new Language(".NET", this.netFramework),
      new Language("Python", this.pythonFramework),
      new Language("Ruby", this.rubyFramework),
      new Language("Java", this.javaFramework),
      new Language("Java Servers", this.javaServers)

    ];
    // this.language = new Language("Javascript", this.javascriptFramework);
    this.language = this.languages[1];
  }


  validatePersonal() {
    console.log("Validate personal >>");
  }

  validateEducation() {
    console.log("Validate education >>");
  }

  addSchoolInput() {
    console.log("Add school input");


  }
}
