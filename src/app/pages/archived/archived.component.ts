import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Subscription } from 'rxjs';
import { Notes } from '../../interfaces/notes';
import { NoteListItemComponent } from '../../components/note-list-item/note-list-item.component';

@Component({
  selector: 'app-archived',
  imports: [NoteListItemComponent],
  templateUrl: './archived.component.html',
  styleUrl: './archived.component.scss'
})
export class ArchivedComponent implements OnInit, OnDestroy {
  subscription!:Subscription;

  notes:Notes[] = [];
  constructor(private notesServices:NotesService){}

  ngOnInit(): void {
    this.subscription = this.notesServices.archives$.subscribe({
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
