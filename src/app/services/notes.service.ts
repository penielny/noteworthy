import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as  NotesActions from '../store/notes.actions';
import { Notes } from '../interfaces/notes';
import { selectArchivedNotes, selectError, selectFavouriteNotes, selectLoading, selectNotes, selectSelectedNote } from '../store/notes.selectors';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes$: Observable<Notes[]>;
  favourites$: Observable<Notes[]>;
  archives$: Observable<Notes[]>;
  loading$: Observable<boolean>;
  selectedNote$: Observable<Notes | null>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.store.dispatch(NotesActions.loadNotes());
    this.notes$ = this.store.select(selectNotes);
    this.favourites$ = this.store.select(selectFavouriteNotes);
    this.archives$ = this.store.select(selectArchivedNotes)
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.selectedNote$ = this.store.select(selectSelectedNote)
  }

  loadNotes() {
    this.store.dispatch(NotesActions.loadNotes());
  }

  getNote(id: number) {
    this.store.dispatch(NotesActions.getNote({ id }));
  }
  
  addNote(note: Notes) {
    this.store.dispatch(NotesActions.addNote({ note }));
  }

  editNote(note: Notes) {
    this.store.dispatch(NotesActions.editNote({ note }));
  }

  deleteNote(id:number) {
    this.store.dispatch(NotesActions.deleteNote({ id }));
  }

  toggleFavourite(id: number, isFavourite: boolean) {
    this.store.dispatch(NotesActions.favouriteNote({ id, isFavourite }));
  }

  toggleArchived(id: number, isArchived: boolean) {
    this.store.dispatch(NotesActions.archiveNote({ id, isArchived }));
  }

}
