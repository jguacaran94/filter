import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!items) return items;
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      let matchesName = it.name.toLowerCase().includes(searchText);
      let matchesPhone = it.phone.toLowerCase().includes(searchText);
      let matchesEmail = it.email.toLowerCase().includes(searchText);
      return matchesName || matchesPhone || matchesEmail
    });
  }
}
