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

@Component({
  templateUrl: './custom-page.component.html',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroShortByPipe]
})

export default class CustomPageComponent {

  name = signal('Óscar vega herrera');

  upper = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  sortByTitle = computed(() => {
    let titles = {
      'name': 'Por nombre',
      'canFly': 'Por volar',
      'color': 'Por color',
      'creator': 'Por creador'
    };

    //return (this.sortBy() == null) ? titles['name'] : titles[this.sortBy() | 'name'];
  })

  changeUpperLower() {
    if (this.upper()) {
      return this.upper.set(false);
    }

    this.upper.set(true);
  }

}
