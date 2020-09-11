import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  name = 'Angular version' + VERSION.major;

  private user = {
    name: 'luan',
    age: 3 + '+'
  };

  /*data binding*/
  /*property binding*/
  inputType = 'text';

  /*event binding*/
  handler() {
    console.log('Click');
  }
}
