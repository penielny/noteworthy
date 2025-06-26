import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as NotesActions from './notes.actions';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { mockNotes } from './sample.note';
import { Store } from '@ngrx/store';
import { selectNotes, selectUniqueTags } from './notes.selectors';

@Injectable()
export class NotesEffects {
    loadNotes$;
    loadNotesTags$;
    addNote$;
    deleteNote$;
    constructor(private actions$: Actions, private store: Store) {
        this.loadNotes$ = createEffect(() =>
            this.actions$.pipe(
                ofType(NotesActions.loadNotes),
                mergeMap(() =>
                    of(mockNotes).pipe(
                        map(notes => NotesActions.loadNotesSuccess({ notes })),
                        catchError(error => of(NotesActions.loadNotesFailure({ error })))
                    )
                )
            )
        );

        this.loadNotesTags$ = createEffect(() =>
            this.actions$.pipe(
                ofType(NotesActions.loadNotesTags),
                mergeMap(() =>
                    of(mockNotes).pipe(
                        map(notes => {
                            const allTags = notes.flatMap(note => note.tags || []);
                            const uniqueTags = Array.from(new Set(allTags));
                            return NotesActions.loadNotesTagsSuccess({ tags: uniqueTags });
                        }),
                        catchError(error => of(NotesActions.loadNotesTagsFailure({ error })))
                    )
                )
            )
        );

        this.addNote$ = createEffect(() =>
            this.actions$.pipe(
                ofType(NotesActions.addNote),
                withLatestFrom(this.store.select(selectUniqueTags)),
                map(([action, existingTags]) => {
                    const newTags = action.note.tags || [];
                    const combined = Array.from(new Set([...existingTags, ...newTags]));

                    return NotesActions.loadNotesTagsSuccess({ tags: combined });
                })
            )
        );

        this.deleteNote$ = createEffect(() =>
            this.actions$.pipe(
                ofType(NotesActions.deleteNote),
                withLatestFrom(this.store.select(selectNotes)),
                map(([action, notes]) => {
                    const filteredNotes = notes.filter(n => n.id !== action.id);
                    const tags = Array.from(
                        new Set(filteredNotes.flatMap(note => note.tags || []))
                    );
                    return NotesActions.loadNotesTagsSuccess({ tags });
                })
            )
        );

    }


}
