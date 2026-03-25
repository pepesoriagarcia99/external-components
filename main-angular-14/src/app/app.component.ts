import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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