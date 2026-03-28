import { Component } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  template: `
    <div class="user-card">
      <h2>{{name}}</h2>
      <p>{{email}}</p>
    </div>
  `,
  styles: [`
    .user-card { 
      border: 1px solid #ccc; 
      padding: 1rem; 
      border-radius: 4px;
    }
  `]
})
export class UserCardComponent {
  name = 'Bob Johnson';
  email = 'bob@example.com';
}