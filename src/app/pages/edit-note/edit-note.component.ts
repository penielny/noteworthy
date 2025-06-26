import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NoteFormComponent } from '../../components/note-form/note-form.component';
import { NotesService } from '../../services/notes.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Notes } from '../../interfaces/notes';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-note',
  imports: [NoteFormComponent,NgClass],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent implements OnDestroy {

  @ViewChild(NoteFormComponent) noteForm!: NoteFormComponent;
  subscription: Subscription;
  note!: Notes;

  constructor(private notesService: NotesService, private router: Router , protected theme:ThemeService) {
    this.subscription = this.notesService.selectedNote$.subscribe({
      next: (value) => {
        if (!value) return;
        this.note = value
      },
    })
  }

  triggerFormSubmit() {
    this.noteForm.submit()
  }

  onSubmit(form: Notes) {
    this.notesService.editNote(form)
    this.noteForm.reset()
    this.notesService.getNote(form.id)
    this.router.navigate(
      ['/app', {
        outlets: {
          info: ['notes', form.id]
        }
      }]
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
