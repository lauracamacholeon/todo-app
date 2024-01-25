import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { checkAll } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: ``,
})
export class TodoPageComponent {
  allChecked: FormControl = new FormControl(false);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.allChecked.valueChanges.subscribe((change) => {
      this.store.dispatch(checkAll());
    });
  }
}
