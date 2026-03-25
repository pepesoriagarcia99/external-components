import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  @ViewChild('myTable', { static: true }) myTable!: ElementRef;

  ngOnInit(): void {}

  agregarDato() {
    // Llama a la función setData expuesta por el web component
    (this.myTable.nativeElement as any).setData(    {
      id: 4,
      name: 'Bob Johnson test',
      email: 'bob.johnsontest@example.com'
    });
  }
}
