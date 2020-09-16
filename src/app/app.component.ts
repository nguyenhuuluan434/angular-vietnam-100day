/* tslint:disable:object-literal-key-quotes */
import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = 'Angular version' + VERSION.major;

}
