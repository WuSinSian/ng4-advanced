import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
data: any = {};
  constructor() { }

  ngOnInit() {
      this.data ={
        'title' :  'this is title',
        'subtitle': 'this is subtitle'
      };

  }


  doSubmit(form: NgForm, $event) {
      console.log(form);
      console.log($event);
      if (form.invalid) {
        alert('表單無效，請檢查欄位!');
      }
  }

  checkValid(field, form) {
     return form['submitted'] || field['touched'] && field['invalid']
   }

}
