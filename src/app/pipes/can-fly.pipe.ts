import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(canFly: boolean): string {
    return canFly ? 'Puede volar' : 'No puede volar';
  }

}
