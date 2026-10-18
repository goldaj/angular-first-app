import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value ? 'Vrai' : 'Faux'} ${args[0] ? args[0] : ''} `;
  }

}
