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
  subscription!:Subscription;

  notes:Notes[] = [];
  constructor(private notesServices:NotesService){}

  ngOnInit(): void {
    this.subscription = this.notesServices.favourites$.subscribe({
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
