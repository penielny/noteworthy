import { createReducer, on } from '@ngrx/store';
import * as NotesActions from './notes.actions';
import { NotesState } from './notes.model';

export const initialState: NotesState = {
    notes: [],
    selectedNote: null,
    searchTerm: '',
    loading: false,
    error: null
};


export const notesReducer = createReducer(
    initialState,

    on(NotesActions.loadNotes, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(NotesActions.loadNotesSuccess, (state, { notes }) => ({
        ...state,
        notes,
        loading: false
    })),

    on(NotesActions.loadNotesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(NotesActions.getNote, (state, { id }) => ({
        ...state,
        selectedNote: state.notes.find(n => n.id === id) || null,
        loading: true,
        error: null
    })),

    on(NotesActions.addNote, (state, { note }) => ({
        ...state,
        notes: [note, ...state.notes]
    })),

    on(NotesActions.searchNote, (state, { term }) => ({
        ...state,
        searchTerm: term
    })),

    on(NotesActions.editNote, (state, { note }) => ({
        ...state,
        notes: state.notes.map(n => (n.id === note.id ? note : n))
    })),

    on(NotesActions.deleteNote, (state, { id }) => ({
        ...state,
        selectedNote: null,
        notes: state.notes.filter(n => n.id !== Number(id))
    })),

    on(NotesActions.favouriteNote, (state, { id, isFavourite }) => ({
        ...state,
        selectedNote: state.selectedNote
            ? { ...state.selectedNote, isFavourite }
            : null,
        notes: state.notes.map(n =>
            n.id === Number(id) ? { ...n, isFavourite } : n
        )
    })),

    on(NotesActions.archiveNote, (state, { id, isArchived }) => ({
        ...state,
        selectedNote: state.selectedNote
            ? { ...state.selectedNote, isArchived }
            : null,
        notes: state.notes.map(n =>
            n.id === Number(id) ? { ...n, isArchived } : n
        )
    }))
);
