import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  javascriptFramework : string[] = ["jQuery", "Bootstrap", "Angular", "Ember", "Meteor", "Backbone"];
  netFramework : string[] = ["Webforms", "MVC", "Razor", "Webpages", "Orchard", "Umbraco", "DotNetNUke", "SharePoint"];
  pythonFramework: string[] = ["Django", "Pyramid", "CherryPy"];
  rubyFramework: string[] = ["Ruby on Rails", "Rack", "Sinatra"];
  javaFramework: string[] = ["JSP", "JSF", "Spring", "Vadiin", "Struts"];
  javaServers: string[] = ["Tomcat", "JBoss", "WebPhere", "Weblogic", "Glassfish"];

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
