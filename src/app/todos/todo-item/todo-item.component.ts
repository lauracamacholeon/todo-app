import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { deleteTodo, editTodo, toggle } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: ``,
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @ViewChild('inputTexto') inputTexto!: ElementRef;
  editing = false;
  completedCheck!: FormControl;
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {}

  // importanto colocarlo en el on init
  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // suscribirse a los cambios del check
    this.completedCheck.valueChanges.subscribe((valor) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  dobleClick(): void {
    this.editing = true;
    setTimeout(() => {
      this.inputTexto.nativeElement.select();
    }, 0);
  }

  // finalizar modo edicion
  editEnd(): void {
    this.editing = false;

    // si es invalido o si es lo mismo para que no dispare la accion

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    //  no se debe disparar si la borro toda
    this.store.dispatch(
      editTodo({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  deleteTask(id: number) {
    // le envio el id que estoy recbiendo es igual que decir id: id
    this.store.dispatch(deleteTodo({ id }));
  }
}
