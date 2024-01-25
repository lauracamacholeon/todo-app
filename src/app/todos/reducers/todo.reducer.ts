import { createReducer, on } from '@ngrx/store';
import {
  checkAll,
  crearTodo,
  deleteTodo,
  editTodo,
  toggle,
} from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

//  al principio no va a haber ninguna tarea entonces tendra un arreglo vacio

export const initialState: Todo[] = [
  new Todo('hola prueba'),
  new Todo('hola prueba2'),
  new Todo('hola prueba3'),
];

export const todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completado: !todo.completado } : todo
    )
  ),
  on(editTodo, (state, { id, texto }) =>
    // aca puede ser texto: texto pero como es el mismo solo se coloca texto
    state.map((todo) => (todo.id === id ? { ...todo, texto } : todo))
  ),
  // regrese todo los id que sean diferentes al id.
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(checkAll, (state) =>
    state.map((todo) => ({ ...todo, completado: !todo.completado }))
  )
);
