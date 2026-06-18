import { ToggleCasePipe } from './../../pipes/toggle-case.pipe';
import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './custom-page.component.html',
  imports: [ToggleCasePipe]
})

export default class CustomPageComponent {

  name = signal('Óscar vega herrera');

  upper = signal(true);

  changeUpperLower() {
    if (this.upper()) {
      return this.upper.set(false);
    }

    this.upper.set(true);
  }

}
