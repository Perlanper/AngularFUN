import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlexComponent } from './alex.component';

const routes: Routes = [{ path: '', component: AlexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlexRoutingModule { }
