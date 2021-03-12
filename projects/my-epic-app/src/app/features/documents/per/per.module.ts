import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerRoutingModule } from './per-routing.module';
import { PerComponent } from './per.component';


@NgModule({
  declarations: [PerComponent],
  imports: [
    CommonModule,
    PerRoutingModule
  ]
})
export class PerModule { }
