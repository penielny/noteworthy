import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotesService } from '../../services/notes.service';
import { Notes } from '../../interfaces/notes';
import { NoteListItemComponent } from "../../components/note-list-item/note-list-item.component";

@Component({
  selector: 'app-notes',
  imports: [NoteListItemComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  subscription: Subscription = new Subscription();
  allNotes: Notes[] = [];
  notes: Notes[] = [];
  term: string = '';
  selectedTag: string | null = null;
  constructor(private notesServices: NotesService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.notesServices.term$.subscribe(term => {
        this.term = term;
        this.filterNotes();
      })
    );

    this.subscription.add(
      this.notesServices.notes$.subscribe(notes => {
        this.allNotes = notes;
        this.filterNotes();
      })
    );

    this.subscription.add(
      this.notesServices.selectedTag$.subscribe(tag => {
        this.selectedTag = tag;
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
    } 
    
    
    else {
      this.notes = [...this.allNotes];
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  
}
