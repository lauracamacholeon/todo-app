import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos/models/todo.model';
import { filtersType } from '../filter/filter.actions';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], filtro: filtersType): Todo[] {
    switch (filtro) {
      case 'active':
        return value.filter((todo) => !todo.completado);
      case 'all':
        return value;
      case 'completed':
        return value.filter((todo) => todo.completado);

      default:
        return value;
    }
  }
}
