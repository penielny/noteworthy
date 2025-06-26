import { Injectable } from '@angular/core';
import { PersonalizationService } from './personalization.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentColor: string = 'light';
  subscription!: Subscription;
  constructor(private personalizationService: PersonalizationService) {
    this.subscription = this.personalizationService.color$.subscribe((color) => {
      this.currentColor = color;
    });
  }
  getBgClass(color: string = this.currentColor, shade: number = 600): string {
    const colorKey = color;
    return `bg-${colorKey}-${shade}`;
  }
  getTextClass(color: string, shade: number = 600): string {
    const colorKey = color;
    return `text-${colorKey}-${shade}`;
  }

}
