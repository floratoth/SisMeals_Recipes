import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe<T extends { [key: string]: any }>
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
    return valueList.filter((item) => item[key] === phrase);
  }
}
