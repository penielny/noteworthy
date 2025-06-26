import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from './notes.model';


export const selectNotesState = createFeatureSelector<NotesState>('notes');

export const selectNotes = createSelector(
  selectNotesState,
  (state) => state.notes
);

export const selectSelectedNote = createSelector(
  selectNotesState,
  (state) => state.selectedNote
);

export const selectSearchTerm = createSelector(
  selectNotesState,
  (state) => state.searchTerm
);

export const selectLoading = createSelector(
  selectNotesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectNotesState,
  (state) => state.error
);

export const selectArchivedNotes = createSelector(
  selectNotes,
  (notes) => notes.filter(note => note.isArchived)
);

export const selectFavouriteNotes = createSelector(
  selectNotes,
  (notes) => notes.filter(note => note.isFavourite)
);

export const selectUniqueTags = createSelector(
  selectNotesState,
  (state) => state.tags
);

export const selectSelectedTag = createSelector(
  selectNotesState,
  (state) => state.selectedTag
);