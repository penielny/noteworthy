import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { notesReducer } from './store/notes/notes.reducer'
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { NotesEffects } from './store/notes/notes.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PersonalizationReducer } from './store/personlization/personlization.reducer';
import { PersonalizationEffects } from './store/personlization/personlization.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ notes: notesReducer, personalization: PersonalizationReducer }),
    provideEffects([NotesEffects,PersonalizationEffects]),
    provideStoreDevtools()
  ],
};
