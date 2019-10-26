import { RouterModule,Routes } from '@angular/router';
import { FormsControlComponent } from './forms-control.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes:Routes=[
  {path:"formcontrol", children: [  
                       //<---- child components declared here
       {path:'',component: FormsControlComponent},
       {path:'autocomplete',component: AutocompleteComponent},
       {path:'checkbox',component: CheckboxComponent},
       {path:'datepicker',component: DatepickerComponent},
  
]},

]

@NgModule({
  declarations: [ FormsControlComponent, AutocompleteComponent, CheckboxComponent, DatepickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   
  ]
})
export class FormsControlModule { }
