import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  imports: [
    BrowserModule,
    UserCardComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const userCardElement = createCustomElement(UserCardComponent, { injector: this.injector });
    customElements.define('user-card', userCardElement);
  }
}
