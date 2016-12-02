import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-property',
  templateUrl: 'property.component.html',
})
export class PropertyComponent implements OnInit {
  constructor() {
    // Do stuff
  }
  ngOnInit() {
    console.log('Validate User Call');
  }
}

