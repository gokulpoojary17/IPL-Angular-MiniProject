import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: string): string {
    const [day, month, year] = value.split('-');
    const date = new Date(+year, +month - 1, +day);

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return `${day} ${monthNames[date.getMonth()]}, ${year}`;
  }


}
