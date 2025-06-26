import { Component, Input } from '@angular/core';
import { Notes } from '../../interfaces/notes';
import { Router, RouterLink } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-list-item',
  imports: [RouterLink],
  templateUrl: './note-list-item.component.html',
  styleUrl: './note-list-item.component.scss'
})
export class NoteListItemComponent {
  list_path: string = "";
  @Input() note!: Notes;

  constructor(private router: Router, private notesService: NotesService) {
    const url = this.router.url;

    if (url.includes('favourites')) {
      this.list_path = 'favourites';
    } else if (url.includes('archived')) {
      this.list_path = 'archived';
    } else {
      this.list_path = '';
    }
  }

  onSelectNote() {
    this.notesService.getNote(this.note.id)
  }

  parseDate(timeStamp: number) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const date = new Date(timeStamp)
    
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  get outletLink() {
    const outlets: any = {
      info: ['notes', this.note.id]
    };

    if (this.list_path) {
      outlets['list'] = [this.list_path];
    }

    return ['/app', { outlets }];
  }


}
