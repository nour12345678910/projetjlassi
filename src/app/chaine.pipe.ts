import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chaine'
})
export class ChainePipe implements PipeTransform {
  

  transform(ch:string): string {
    return `*****(Mr/Ms)${ch}******`;

  }

}
