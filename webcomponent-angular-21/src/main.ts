// import { bootstrapApplication } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { UserCardComponent } from './user-card/user-card.component';

// bootstrapApplication(UserCardComponent).then(appRef => {
//   const injector = appRef.injector;

//   const element = createCustomElement(UserCardComponent, { injector });

//   if (!customElements.get('wc-user-card')) {
//     customElements.define('wc-user-card', element);
//   }
// });

// import { bootstrapApplication } from '@angular/platform-browser';
// import { UserCardComponent } from './user-card/user-card.component';

// class WcTable extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });
//     const container = document.createElement('div');
//     shadow.appendChild(container);

//     // bootstrap angular standalone component dentro del container
//     bootstrapApplication(UserCardComponent)
//       .then(appRef => {
//         // Aquí Angular se encarga del component tree
//         container.innerHTML = `<wc-user-card></wc-user-card>`;
//       });
//   }
// }

// // registrar solo si no existe
// if (!customElements.get('wc-user-card')) {
//   customElements.define('wc-user-card', WcTable);
// }

import { UserCardComponent } from './user-card/user-card.component';
import { bootstrapApplication } from '@angular/platform-browser';

class WcUserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadow.appendChild(container);

    bootstrapApplication(UserCardComponent).then(() => {
      const el = document.createElement('user-card');
      container.appendChild(el);
    });
  }
}

if (!customElements.get('user-card-wc')) {
  customElements.define('user-card-wc', WcUserCard);
}

// import { bootstrapApplication } from '@angular/platform-browser';
// import { UserCardComponent } from './user-card/user-card.component';

// bootstrapApplication(UserCardComponent);