import { Component, OnInit } from '@angular/core';

import { IProperty } from './property';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'my-property',
  templateUrl: 'property.component.html',
})
export class PropertyComponent implements OnInit {
  organizationName: string;
  properties: IProperty[];
  constructor(private _propertyService: PropertyService) {
  }
  ngOnInit() {
    this.properties = this._propertyService.getAllPropertiesByOrganization();
    this.organizationName = 'ZetaPark';
  }
}

