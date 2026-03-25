import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImplWcSvelteComponent } from './components/impl-wc-svelte/impl-wc-svelte';
import { ImplWcAngularComponent } from './components/impl-wc-angular/impl-wc-angular';


@NgModule({
  declarations: [AppComponent, ImplWcSvelteComponent, ImplWcAngularComponent],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
