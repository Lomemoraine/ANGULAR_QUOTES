import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
