import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as NotesActions from './notes.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { mockNotes } from './sample.note';

@Injectable()
export class NotesEffects {
    loadNotes$;
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
     }


}
