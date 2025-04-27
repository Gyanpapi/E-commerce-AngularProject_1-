import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="handleclick.emit()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {

  label= input('');
  handleclick= output();
}
