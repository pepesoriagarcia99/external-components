import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  standalone: true
})
export class UserCardComponent {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  phoneNumbers: string[] = [];

  public addPhoneNumber(phone: string) {
    this.phoneNumbers.push(phone);
  }
}
