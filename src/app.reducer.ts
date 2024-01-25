import { ActionReducerMap } from "@ngrx/store";
import { filtersType } from "./app/filter/filter.actions";
import { Todo } from "./app/todos/models/todo.model";
import { todoReducer } from "./app/todos/reducers/todo.reducer";
import { filterReducer } from "./app/filter/filter.reducer";

export interface AppState {
    todos: Todo[],
    filter: filtersType
}


// aqui vamos a configurar todos los reducer de la app

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}