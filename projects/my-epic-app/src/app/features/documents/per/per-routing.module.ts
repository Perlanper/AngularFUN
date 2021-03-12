import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerComponent } from './per.component';

const routes: Routes = [{ path: '', component: PerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerRoutingModule { }
