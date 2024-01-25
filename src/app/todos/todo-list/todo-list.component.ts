import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``,
})
export class TodoListComponent {
  todos: Todo[] = [];
  editando = false;
  selected = 9999;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {


    //  aqui ya se estan suscribiendo a los cambios de esa lista.
    // si se desea colocar mas paginas tocaria cancelar la suscripcion 
    this.store.select('todos').subscribe((todos) => {
      console.log("desde lista");
      
      console.log(todos);
      
      this.todos = todos;
    });
  }

  

}
