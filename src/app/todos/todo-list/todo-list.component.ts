import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { FormControl } from '@angular/forms';
import { filtersType } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``,
})
export class TodoListComponent {
  todos: Todo[] = [];
  editando = false;
  selected = 9999;

  filterActive : filtersType = 'all';

  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filterActive = state.filter;
      this.todos = state.todos;
    });
  }
}
