import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from './user.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder){}

  ngOnInit(){
      this.myForm = this._fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        address: this._fb.group({
          street: ['', <any>Validators.required],
          postcode: ['']
        })
      });
  }

  save(model: User, isValid: boolean){
    this.submitted = true;

    console.log(model, isValid)
  }
}