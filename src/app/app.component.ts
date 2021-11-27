import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spy-and-mock';
  stuffFormGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}

  createStuffFormGroup(): void {
    this.stuffFormGroup = this.formBuilder.group({
      name: [''],
      things: [''],
    })
  }

  generateUUID(): string {
    return UUID.UUID();
  }

  ngOnInit(): void {
    this.createStuffFormGroup();
  }
}
