import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App Filter';

  contacts = [
    {name:'John Lennon', phone: '112', email: 'john.lennon@beatles.com'},
    {name:'Paul McCartney', phone: '223', email: 'paul.mccartney@beatles.com'},
    {name:'George Harrison', phone: '334', email: 'george.harrison@beatles.com'},
    {name:'Ringo Star', phone: '445', email: 'ringo.star@beatles.com'}
  ]
}
