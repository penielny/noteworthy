import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { ArchivedComponent } from './pages/archived/archived.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';

export const routes: Routes = [
    {
        path: '',
        component: NotesComponent,
    },
    {
        path: 'notes/:id',
        component: NoteComponent,
    },
    {
        path: 'archived',
        component: ArchivedComponent,
    },
    {
        path: 'create',
        component: CreateNoteComponent,
    },
];
