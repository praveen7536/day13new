import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionToggleComponent } from './accordion-toggle/accordion-toggle.component';
import { NgbdModalFocus } from './modal-focus/modal-focus.component';
import { NgbdTypeaheadTemplate } from './typeahead-template/typeahead-template.component';
import { PopoverDelayComponent } from './popover-delay/popover-delay.component';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AccordionToggleComponent,
    NgbdModalFocus,
    NgbdTypeaheadTemplate,
    PopoverDelayComponent,
    CarouselPauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
