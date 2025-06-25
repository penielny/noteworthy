import { createAction, props } from '@ngrx/store';
import { Notes } from '../interfaces/notes';

export const loadNotes = createAction('[Notes] Load Notes');

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: Notes[] }>()
);

export const loadNotesFailure = createAction(
  '[Notes] Load Notes Failure',
  props<{ error: any }>()
);

export const addNote = createAction(
  '[Notes] Add Note',
  props<{ note: Notes }>()
);

export const editNote = createAction(
  '[Notes] Edit Note',
  props<{ note: Notes }>()
);

export const deleteNote = createAction(
  '[Notes] Delete Note',
  props<{ id: string }>()
);

export const favouriteNote = createAction(
  '[Notes] Favourite Note',
  props<{ id: string; isFavourite: boolean }>()
);
