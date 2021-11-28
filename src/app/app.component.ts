import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Stuff } from './models/stuff';
import { Thing } from './models/thing';
import { StuffService } from './services/stuff.service';
import { ThingService } from './services/thing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spy-and-mock';
  stuffFormGroup: FormGroup | undefined;
  thingFormGroup: FormGroup | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private stuffService: StuffService,
    private thingService: ThingService
  ) {}

  createStuff(): void {
    if (this.stuffFormGroup?.valid) {
      const stuff: Stuff = this.stuffFormGroup.value;
      stuff.id = this.generateUUID();
      this.stuffService.postStuff(stuff);
    }
  }

  createThing(): void {
    if (this.thingFormGroup?.valid) {
      const thing: Thing = this.thingFormGroup.value;
      thing.id = this.generateUUID();
      this.thingService.postThing(thing);
    }
  }

  createStuffFormGroup(): void {
    this.stuffFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      things: [''],
    });
  }

  createThingFormGroup(): void {
    this.thingFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      amount: ['']
    })
  }

  deleteStuff(stuff: Stuff): void {
    this.stuffService.deleteStuff(stuff);
  }

  deleteThing(thing: Thing): void {
    this.thingService.deleteThing(thing);
  }

  generateUUID(): string {
    return UUID.UUID();
  }

  ngOnInit(): void {
    this.createStuffFormGroup();
    this.createThingFormGroup();
  }
}
