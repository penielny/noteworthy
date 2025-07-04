import { createAction, props } from '@ngrx/store';
import { Notes } from '../../interfaces/notes';


export const loadNotes = createAction('[Notes] Load Notes');

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: Notes[] }>()
);
export const loadNotesTags = createAction('[Notes] Load Notes Tags'); 

export const loadNotesTagsSuccess = createAction(
  '[Notes] Load Notes Tags Success',
  props<{ tags: string[] }>()
);

export const setNoteSelectedTag = createAction(
  '[Notes] Set Notes Selected Tag',
  props<{ tags: string }>()
);

export const loadNotesTagsFailure = createAction(
  '[Notes] Load Notes Tag Failure',
  props<{ error: any }>()
);

export const loadNotesFailure = createAction(
  '[Notes] Load Notes Failure',
  props<{ error: any }>()
);

export const getNote = createAction(
  '[Notes] Get Note',
  props<{ id: number }>()
);

export const searchNote = createAction(
  '[Notes] Search Note',
  props<{ term: string }>()
);

export const getNoteSuccess = createAction(
  '[Notes] Get Note Success',
  props<{ note: Notes }>()
);

export const getNoteFailure = createAction(
  '[Notes] Get Note Failure',
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
  props<{ id: number }>()
);

export const favouriteNote = createAction(
  '[Notes] Favourite Note',
  props<{ id: number; isFavourite: boolean }>()
);

export const archiveNote = createAction(
  '[Notes] Favourite Note',
  props<{ id: number; isArchived: boolean }>()
);
