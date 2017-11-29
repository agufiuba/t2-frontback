import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: [ './create-form.component.css' ]
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  create() {
    console.log(environment.uid)
  }

}
