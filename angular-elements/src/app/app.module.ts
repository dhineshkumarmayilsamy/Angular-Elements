import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeartBtnComponent } from './heart-btn/heart-btn.component';

import { createCustomElement } from "@angular/elements"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeartBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents:[
    HeartBtnComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el =  createCustomElement(HeartBtnComponent, {injector : this.injector});
    customElements.define('heart-btn', el);

  }


}
