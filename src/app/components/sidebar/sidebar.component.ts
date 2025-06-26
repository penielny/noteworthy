import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Subscription } from 'rxjs';
import { colorScheme } from '../../store/personlization/personlization.model';
import { PersonalizationService } from '../../services/personalization.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterModule,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {

  subscription: Subscription = new Subscription();
  noteCount: number = 0;
  favCount: number = 0;
  archivedCount: number = 0;
  currentTheme: colorScheme = 'default';

  tags: string[] = [];

  @Input() showCustomization: boolean = false;
  @Output() toggleModal = new EventEmitter<boolean>();

  constructor(private noteService: NotesService, private themeService: PersonalizationService) {
    this.subscription.add(this.themeService.color$.subscribe((theme) => {
      this.currentTheme = theme;
    }));

    this.subscription.add(this.noteService.notes$.subscribe({
      next: (value) => {
        this.noteCount = value.length;
        this.favCount = value.filter(n => n.isFavourite).length,
          this.archivedCount = value.filter(n => n.isArchived).length
      },
    }))

    this.subscription.add(this.noteService.tags$.subscribe({
      next: (value) => {
        this.tags = value;
      },
    }));
  }


getCountBgClass(color: string, shade: number = 600): string {
  const colorKey = color;
  if(colorKey === 'dark') {
    return 'bg-dark-600';
  }
  return `bg-${colorKey}-${shade}`;
}
getBgClass(color: string, shade: number = 600): string {
  const colorKey = color;
  return `bg-${colorKey}-${shade}`;
}


  onToggleModal() {
    this.toggleModal.emit(!this.showCustomization);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
