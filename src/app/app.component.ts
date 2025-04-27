import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // 🔥 Correct path!
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `
    <app-header />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecom';
}
