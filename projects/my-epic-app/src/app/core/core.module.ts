import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    //CommonModule,
    //vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    
    //material
    MatToolbarModule,
    MatButtonModule

  ],
  exports:[MainLayoutComponent]
})
export class CoreModule { }
