import { CurrencyPipe, DecimalPipe, PercentPipe } from "@angular/common";
import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './numbers-page.component.html',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe]
})

export default class NumbersPageComponent {

  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);


}
