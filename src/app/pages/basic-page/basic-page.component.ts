import { AvailableLocale, LocaleService } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Component, effect, inject, LOCALE_ID, signal } from "@angular/core";


@Component({
  templateUrl: './basic-page.component.html',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe]
})

export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

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

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }

}
