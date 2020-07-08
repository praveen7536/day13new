import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AccordionToggleComponent} from './accordion-toggle/accordion-toggle.component';
import{NgbdModalFocus} from './modal-focus/modal-focus.component';
import{PopoverDelayComponent} from './popover-delay/popover-delay.component';
import {NgbdTypeaheadTemplate} from './typeahead-template/typeahead-template.component';


const routes: Routes = [
  {
    path:"",
    component:AccordionToggleComponent
  },
  {
    path:"modal",
    component:NgbdModalFocus
  },
  {
    path:"popover",
    component:PopoverDelayComponent
  },
  {
    path:"typeahead",
    component:NgbdTypeaheadTemplate
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
