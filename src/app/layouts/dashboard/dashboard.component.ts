import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ListbarComponent } from "../../components/listbar/listbar.component";
import { PersonalizationService } from '../../services/personalization.service';
import { Subscription } from 'rxjs';
import { CustomizationModalComponent } from "../../components/customization-modal/customization-modal.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent, ListbarComponent, CustomizationModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnDestroy {

  showCustomization = false;
  subscription: Subscription;

  constructor(private PersonalizationService: PersonalizationService) {
    this.subscription = this.PersonalizationService.showMOdal$.subscribe((isOpen) => {
      this.showCustomization = isOpen;
    });
  }

  toggleModal(state: boolean = !this.showCustomization) {
    this.PersonalizationService.togglePersonalization(state);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
