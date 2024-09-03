import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateformat',
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, format: string = 'yyyy-MM-dd'): string {
    const datePipe = new DatePipe('en-Us');
    return datePipe.transform(value, format)!
  }

}
