import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
    // Do stuff
  }
  ngOnInit() {
    console.log('Hello Home');
  }
}

