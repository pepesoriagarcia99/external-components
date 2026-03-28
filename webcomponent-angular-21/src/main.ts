import '@angular/compiler';
import 'zone.js';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { UserCardComponent } from './app/user-card/user-card';


(async () => {
  const app = await createApplication({
    providers: [],
  });

  const element = createCustomElement(UserCardComponent, {
    injector: app.injector
  });

  customElements.define('user-card', element);
})();
