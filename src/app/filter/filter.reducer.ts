import { createReducer, on } from "@ngrx/store";
import { filtersType, setFilter } from "./filter.actions";

export const initialStateFilter: filtersType = 'all';

export const filterReducer = createReducer(
  initialStateFilter as filtersType, // Usar una aserción de tipo para hacer que TypeScript lo acepte
  on(setFilter, (state, { filter }) => filter)
);
