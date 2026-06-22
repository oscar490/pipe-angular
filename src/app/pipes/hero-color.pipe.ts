import { Pipe, PipeTransform } from "@angular/core";
import { Color, ColorMap } from "../interfaces/hero.interface";

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {

  transform(value: Color) {
    return Color[value];
  }

}
