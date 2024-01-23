import { createReducer, on } from '@ngrx/store';
import { crearTodo } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';


//  al principio no va a haber ninguna tarea entonces tendra un arreglo vacio

export const initialState: Todo[] = [
    new Todo('hola prueba')
];

export const todoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo( texto ) ]),

);