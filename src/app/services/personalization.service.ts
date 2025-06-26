import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorScheme, fontName } from '../store/personlization/personlization.model';
import { Store } from '@ngrx/store';
import * as PeronalizationActions from '../store/personlization/personlization.actions';
import * as PeronalizationSelectors from '../store/personlization/personlization.selectors';

@Injectable({
  providedIn: 'root'
})
export class PersonalizationService {
  color$: Observable<colorScheme>;
  font$: Observable<fontName>;
  showMOdal$: Observable<boolean>;

  constructor(private store: Store) {
    this.store.dispatch(PeronalizationActions.loadPersonalization());
    this.color$ = this.store.select(PeronalizationSelectors.selectPersonalizationColor);
    this.font$ = this.store.select(PeronalizationSelectors.selectPersonalizationFont);
    this.showMOdal$ = this.store.select(PeronalizationSelectors.selectPersonalizationToggle);
  }

  setPersonalizationTheme(color: colorScheme) {
    this.store.dispatch(PeronalizationActions.setPersonalizationTheme({ color }));
  }

  setPersonalizationFont(fontName: fontName) {
    this.store.dispatch(PeronalizationActions.setPersonalizationFont({ fontName }));
  } 
  togglePersonalization(isOpen: boolean) {
    this.store.dispatch(PeronalizationActions.togglePersonalization({ isOpen }));
  }
  loadPersonalization() {
    this.store.dispatch(PeronalizationActions.loadPersonalization());
  }

}
