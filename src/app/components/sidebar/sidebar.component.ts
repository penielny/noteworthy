import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  noteSubscription!: Subscription;
  noteCount: number = 0;
  favCount:number = 0;
  archivedCount:number = 0;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.noteSubscription = this.noteService.notes$.subscribe({
      next: (value) => {
        this.noteCount = value.length;
        this.favCount = value.filter(n=>n.isFavourite).length,
        this.archivedCount = value.filter(n=>n.isArchived).length
      },
    })
  }

  ngOnDestroy(): void {
    this.noteSubscription.unsubscribe()
  }

}
