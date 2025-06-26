import { Component, Input, OnDestroy } from '@angular/core';
import { PersonalizationService } from '../../services/personalization.service';
import { colorScheme, fontName } from '../../store/personlization/personlization.model';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

interface colorOption {
  name: colorScheme;
}

@Component({
  selector: 'app-customization-modal',
  imports: [NgClass],
  templateUrl: './customization-modal.component.html',
  styleUrl: './customization-modal.component.scss'
})
export class CustomizationModalComponent implements OnDestroy {

  @Input() isOpen!: boolean;
  activeColor: colorScheme = 'default';
  colors: colorOption[] = [
    { name: 'default' },
    { name: 'blue' },
    { name: 'purple' },
    { name: 'pink' },
    { name: 'dark' }
  ];

  fonts: fontName[] = [
    'roboto',
    'serif',
    'sans-serif',
    'monospace'
  ];
  subscription!: Subscription;

  constructor(private personalizationService: PersonalizationService, protected theme:ThemeService) {
    this.subscription = this.personalizationService.color$.subscribe(color => {
      this.activeColor = color;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setFont(font: fontName) {
    this.personalizationService.setPersonalizationFont(font);
  }

  selectColor(color: colorScheme) {
    this.personalizationService.setPersonalizationTheme(color);
  }

  closeModal() {
    this.personalizationService.togglePersonalization(!this.isOpen);
  }

}
