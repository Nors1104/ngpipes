import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
  standalone: true,
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): unknown {
    return toUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
