import { Injectable } from '@angular/core';
import { PersonalizationService } from './personalization.service';
import { Subscription } from 'rxjs';
import { fontName } from '../store/personlization/personlization.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentColor: string = 'light';
  currentFont: fontName = 'sans-serif';
  subscription: Subscription = new Subscription();

  constructor(private personalizationService: PersonalizationService) {
    
    this.subscription.add(this.personalizationService.color$.subscribe((color) => {
      this.currentColor = color;
    }));

    this.subscription.add(this.personalizationService.font$.subscribe((font) => {
      this.currentFont = font;
    }));

  }

  getFontClass(font: fontName = this.currentFont): string {
    return `font-${font}`;
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
