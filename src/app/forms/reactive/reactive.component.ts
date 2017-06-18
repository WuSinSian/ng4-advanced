
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ValidateSbutitle } from "app/shared/validate-length";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  data : any = {};
  form : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {



    this.form = this.fb.group({
      'title': [
        'this is title',[
            Validators.required,
            Validators.minLength(3)
        ]
      ],

      'metadata':this.fb.group({
          'subtitle' : ['Hello', [
            Validators.required, ValidateSbutitle

            ]
          ]
      }),

      "addresses": this.fb.array([
        this.fb.control('address 1'),
        this.fb.control('address 2'),
      ])
    });
  }

  addNewAddress(){
    let addresses = this.form.get('addresses')as FormArray;
    addresses.push(
      this.fb.control('new address')
    );

  }

  checkValid(fieldName:string, form:NgForm){
    // return ( form['submitted']||this.form.get('title')['touched'] )&&
      return (form['submitted'] || this.form.get(fieldName)['touched']) &&
     this.form.get(fieldName)['invalid'];

  }

}
