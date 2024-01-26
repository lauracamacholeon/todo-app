import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filtersType, setFilter } from '../../filter/filter.actions';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { deleteCompleted } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: ``,
})
export class TodoFooterComponent {
  filtroActual: filtersType = 'all';
  filtros: filtersType[] = ['all', 'active', 'completed'];
  todoLeft: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filter;
      this.todoLeft = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  setFilter(filter: filtersType): void {
    this.store.dispatch(setFilter({ filter }));
  }

  deleteAllCompleted(): void {
    this.store.dispatch(deleteCompleted());
  }
}
