import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ListbarComponent } from "../../components/listbar/listbar.component";
import { PersonalizationService } from '../../services/personalization.service';
import { Subscription } from 'rxjs';
import { CustomizationModalComponent } from "../../components/customization-modal/customization-modal.component";
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent, ListbarComponent, CustomizationModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnDestroy {

  showCustomization = false;
  subscription: Subscription = new Subscription();

  showNoteState:boolean= false;

  constructor(private PersonalizationService: PersonalizationService,private noteService: NotesService) {
    this.subscription.add(this.PersonalizationService.showMOdal$.subscribe((isOpen) => {
      this.showCustomization = isOpen;
    }));

    this.subscription.add(this.noteService.selectedNote$.subscribe((note) => {
      this.showNoteState = !!note;
    }));
  }

  toggleModal(state: boolean = !this.showCustomization) {
    this.PersonalizationService.togglePersonalization(state);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
