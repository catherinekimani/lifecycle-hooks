import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks';
  inputText: string = ''
  onSubmit(inputEl:HTMLInputElement) {
    this.inputText = inputEl.value;
  }
}
