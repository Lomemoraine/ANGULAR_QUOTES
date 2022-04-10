import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): number {
    let todaysdate:any=new Date();
    var dateDifference=Math.abs(value-todaysdate);
    var dateSeconds = dateDifference*0.001;
    const seconds = 86400;
    var daysPassed= Math.floor(dateSeconds/seconds);

    return daysPassed;
  }

}
