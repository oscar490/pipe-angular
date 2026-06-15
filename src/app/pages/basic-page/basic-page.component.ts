import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Component, effect, signal } from "@angular/core";


@Component({
  templateUrl: './basic-page.component.html',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe]
})

export default class BasicPageComponent {

  nameLower = signal('óscar');
  nameUpper = signal('ÓSCAR');
  fullName = signal('óScAR VeGa HeRReRa');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  })

}
