import { Component, input } from "@angular/core";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent {

  title = input.required();
}
