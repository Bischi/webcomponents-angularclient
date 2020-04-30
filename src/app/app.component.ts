import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularConsumer';

  selected: string;
  selectionValues: Array<string>;

  constructor() {
    this.selectionValues = new Array<string>('HP', 'Lenovo', 'Apple', 'Test');
  }

  onNameChanged(event) {
    this.selected = event.detail;
  }
}
