import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PropertyComponent } from './property.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PropertyComponent],
  exports: [PropertyComponent],
  //providers: [NameListService]
})
export class PropertyModule { }
