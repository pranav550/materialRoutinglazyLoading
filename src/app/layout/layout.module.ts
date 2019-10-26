import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { CardComponent } from './card/card.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpantionPanelComponent } from './expantion-panel/expantion-panel.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes=[
  {path:"",  children:[
    {path:'', component:LayoutComponent},
    {path:"card", component:CardComponent},
    {path:"stepper", component:StepperComponent},
    {path:"expantion", component:ExpantionPanelComponent},
    {path:"tabs", component:TabsComponent},
  ]}
]

@NgModule({
  declarations: [LayoutComponent, CardComponent, StepperComponent, ExpantionPanelComponent, TabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
