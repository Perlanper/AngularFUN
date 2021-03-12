import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    redirectTo:'home'
   },
   {
     path: 'home',
     loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
   },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: 'documents', loadChildren: () => import('./features/documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'documents/per', loadChildren: () => import('./features/documents/per/per.module').then(m => m.PerModule) },
  { path: 'documents/alex', loadChildren: () => import('./features/documents/alex/alex.module').then(m => m.AlexModule) },
   {
     path:'**',
     redirectTo:'home'
   }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
