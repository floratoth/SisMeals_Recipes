import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe<T extends { [key: string]: any }>
  implements PipeTransform
{
  transform(
    valueList: T[] | null,
    phrase: string = '',
    key: string = ''
  ): T[] | null {
    if (!Array.isArray(valueList) || !phrase) {
      return valueList;
    }
    if (valueList === null) {
      return null;
    }
    phrase = phrase.toLowerCase();
    return valueList.filter((item) => {
      const data = String(item[key]).toLowerCase();
      return data.includes(phrase);
    });
  }
}
