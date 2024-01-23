import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: ``,
})
export class TodoAddComponent {
  txtInput: FormControl;
  
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  add(): void {

    if(this.txtInput.invalid){
      return;
    }

    // disparar la accion
    this.store.dispatch( actions.crearTodo({texto: this.txtInput.value}) )
    this.txtInput.reset();
    
    
  }
}
