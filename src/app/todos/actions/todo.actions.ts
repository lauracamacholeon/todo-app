import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()
  );
  
