import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Subscription, TimeoutInfo } from 'rxjs';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';

@Component({
  selector: 'app-listbar',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './listbar.component.html',
  styleUrl: './listbar.component.scss'
})
export class ListbarComponent implements OnDestroy {
  searchTerm: string = '';
  subscription!: Subscription;
  timeoutRef!: TimerHandle;

  constructor(private notesService: NotesService) {
    this.subscription = this.notesService.term$.subscribe(term => {
      this.searchTerm = term;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;

    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
    this.timeoutRef = setTimeout(() => {
      this.notesService.searchNote(this.searchTerm);
    }, 500);
  }

}
