import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as NotesActions from './notes.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { mockNotes } from './sample.note';

@Injectable()
export class NotesEffects {
    loadNotes$;
    loadNotesTags$;
    constructor(private actions$: Actions) {
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

        this.loadNotesTags$ =createEffect(() =>
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
    }


}
