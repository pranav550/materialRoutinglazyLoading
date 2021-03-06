import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren:"./forms-control/forms-control.module#FormsControlModule"},
  {path:"navigation", loadChildren: "./navigation/navigation.module#NavigationModule"},
  {path:"layout", loadChildren: "./layout/layout.module#LayoutModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
