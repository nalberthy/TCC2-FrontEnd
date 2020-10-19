import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { AreaInternaComponent } from './area-interna/area-interna.component';
const routes: Routes = [
  
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'area-interna',
     component: AreaInternaComponent
    // canLoad: [AuthGuardAdmin],
  },
// {
//     path: 'painel',
//      loadChildren: () => import('./area-interna/area-interna.module').then(m => m.PainelControleModule),
//     // canLoad: [AuthGuardAdmin],
//   },
    
//   {
//     path:'**',
//     redirectTo: 'painel',
//     pathMatch: 'full'
//   },
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
