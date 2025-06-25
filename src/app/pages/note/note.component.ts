import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Notes } from '../../interfaces/notes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnDestroy {

  note: Notes | null = null;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private noteService: NotesService) {
    this.subscription = this.noteService.selectedNote$.subscribe({
      next: (value) => {
        this.note = value;
      },
    })
  }

  onFavourite() {
    if (!this.note) return;
    this.noteService.toggleFavourite(this.note?.id, !this.note?.isFavourite)
  }

  onArchive() {
    if (!this.note) return;
    this.noteService.toggleArchived(this.note?.id, !this.note?.isArchived)
  }

  onDelete() {
    if (!this.note?.id) return;
    this.noteService.deleteNote(this.note?.id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
