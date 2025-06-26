import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Subscription, TimeoutInfo } from 'rxjs';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';
import { NgClass } from '@angular/common';
import { PersonalizationService } from '../../services/personalization.service';

@Component({
  selector: 'app-listbar',
  imports: [RouterOutlet, RouterLink,NgClass],
  templateUrl: './listbar.component.html',
  styleUrl: './listbar.component.scss'
})
export class ListbarComponent implements OnDestroy {
  searchTerm: string = '';
  subscription= new Subscription();
  timeoutRef!: TimerHandle;
  currentTheme: string = 'default';

  constructor(private notesService: NotesService,private theme:PersonalizationService) {
    this.subscription.add(this.notesService.term$.subscribe(term => {
      this.searchTerm = term;
    }));
    this.subscription.add(this.theme.color$.subscribe((theme) => {
      this.currentTheme = theme;
    }));
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getBgClass(color: string, shade: number = 600): string {
  const colorKey = color;
  return `bg-${colorKey}-${shade}`;
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
