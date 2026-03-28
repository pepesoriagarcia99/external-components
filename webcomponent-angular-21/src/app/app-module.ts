import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { UserCardComponent } from './user-card/user-card';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(UserCardComponent, {
      injector: this.injector,
    });

    customElements.define('user-card', el);
  }
}