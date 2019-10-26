import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes:Routes=[
  {path:"", children:[
    {path:"", component:NavigationComponent},
    {path:"sidenav", component:SidenavComponent}
  ]}
]

@NgModule({
  declarations: [NavigationComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NavigationModule { }
