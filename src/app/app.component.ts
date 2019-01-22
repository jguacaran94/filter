import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App Filter';

  contacts = [
    'John Lennon',
    'Paul McCartney',
    'George Harrison',
    'Ringo Star'
  ]
}
