import { Component, ViewChild } from '@angular/core';
import { NoteFormComponent } from "../../components/note-form/note-form.component";
import { Notes } from '../../interfaces/notes';
import { NotesService } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  imports: [NoteFormComponent],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {
  @ViewChild(NoteFormComponent) noteForm!: NoteFormComponent;
  constructor(private notesService: NotesService, private router: Router) { }

  triggerFormSubmit() {
    this.noteForm.submit();
  }

  onSubmit(note: Notes) {
    this.notesService.addNote(note)
    this.noteForm.reset();
    this.notesService.getNote(note.id)
    this.router.navigate(
      ['/app', {
        outlets: {
          info: ['notes', note.id]
        }
      }]
    );
  }

}
