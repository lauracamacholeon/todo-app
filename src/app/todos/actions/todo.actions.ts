import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] edit Todo',
  // el id que voy a editar y el texto que colocare
  props<{ id: number; texto: string }>()
);

export const deleteTodo = createAction(
  '[TODO] delete Todo',
  props<{ id: number }>()
);

export const checkAll = createAction(
  '[TODO] check all Todo',
  // props<{ completado: boolean }>()
);

export const deleteCompleted = createAction(
  '[TODO] deleted completed Todo' 
)