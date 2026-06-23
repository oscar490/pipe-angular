import { TitleCasePipe } from '@angular/common';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text.color.pipe';
import { ToggleCasePipe } from './../../pipes/toggle-case.pipe';
import { Component, computed, signal } from "@angular/core";
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroShortByPipe } from '../../pipes/hero-short-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  templateUrl: './custom-page.component.html',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroShortByPipe, HeroFilterPipe]
})

export default class CustomPageComponent {

  name = signal('Óscar vega herrera');

  upper = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('')

  sortByTitle = computed(() => {

    switch (this.sortBy()) {
      case 'name':
        return 'Por nombre';

      case 'canFly':
        return 'Por volar';

      case 'color':
        return 'Por color';

      case 'creator':
        return 'Por creador'

      default:
        return ''
    }
  })

  changeUpperLower() {
    if (this.upper()) {
      return this.upper.set(false);
    }

    this.upper.set(true);
  }

}
