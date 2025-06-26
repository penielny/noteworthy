import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { NoteComponent } from './pages/note/note.component';
import { ArchivedComponent } from './pages/archived/archived.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch:"full"
    },
    {
        path: 'app',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: NotesComponent,
                outlet:"list",
            },
            {
                path: 'notes/:id',
                component: NoteComponent,
                 outlet:"info",
            },
            {
                path: 'notes/:id/edit',
                component: EditNoteComponent,
                 outlet:"info",
            },
            {
                path: 'favourites',
                component: FavouriteComponent,
                 outlet:"list",
            },
            {
                path: 'archived',
                component: ArchivedComponent,
                 outlet:"list",
            },
            {
                path: 'create',
                component: CreateNoteComponent,
                 outlet:"info",
            },
            {
                path: '**',
                component: CreateNoteComponent,
                //  outlet:"info",
            },
        ]
    },

];
