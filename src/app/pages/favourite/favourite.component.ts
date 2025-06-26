import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Subscription } from 'rxjs';
import { Notes } from '../../interfaces/notes';
import { NoteListItemComponent } from "../../components/note-list-item/note-list-item.component";

@Component({
  selector: 'app-favourite',
  imports: [NoteListItemComponent],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {
  subscription: Subscription = new Subscription();
  allNotes: Notes[] = [];
  notes: Notes[] = [];
  term: string = '';
  constructor(private notesServices: NotesService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.notesServices.term$.subscribe(term => {
        this.term = term;
        this.filterNotes();
      })
    );

    this.subscription.add(
      this.notesServices.favourites$.subscribe(notes => {
        this.allNotes = notes;
        this.filterNotes();
      })
    );
  }

  filterNotes(): void {
    const term = this.term.toLowerCase();
    if (term !== '') {
      this.notes = this.allNotes.filter(note =>
        note.title.toLowerCase().includes(term) ||
        note.note.toLowerCase().includes(term) ||
        note.tags.some(tag => tag.toLowerCase().includes(term))
      );
    } else {
      this.notes = [...this.allNotes];
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
