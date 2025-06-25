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
  subscription!:Subscription;

  notes:Notes[] = [];
  constructor(private notesServices:NotesService){}

  ngOnInit(): void {
    this.subscription = this.notesServices.notes$.subscribe({
      next: (value)=> {
        console.log(value)
        this.notes = value
      },
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
