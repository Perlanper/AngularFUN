import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlexRoutingModule } from './alex-routing.module';
import { AlexComponent } from './alex.component';


@NgModule({
  declarations: [AlexComponent],
  imports: [
    CommonModule,
    AlexRoutingModule
  ]
})
export class AlexModule { }
