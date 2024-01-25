import { createAction, props } from '@ngrx/store';

export type filtersType = 'all' | 'active'| 'completed';

export const setFilter = createAction(
  '[FILTER] set filter ',
  props<{ filter: filtersType }>()
);
