import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PersonalizationActions from './personlization.actions';
import { map, withLatestFrom } from "rxjs";
import { PersonalizationState } from "./personlization.model";
import * as PersonalizationSelectors from './personlization.selectors'

@Injectable()
export class PersonalizationEffects {
    $loadTheme;
    $setPersonalizationFont;
    $setPersonalizationTheme;

    constructor(private actions$: Actions, private store: Store) {
        this.$loadTheme = createEffect(() =>
            this.actions$.pipe(
                ofType(PersonalizationActions.loadPersonalization),
                map(() => {
                    const theme = localStorage.getItem('theme');
                    if (theme) {
                        const themeData = JSON.parse(theme);
                        return PersonalizationActions.loadPersonalizationSuccess({ personalization: themeData });
                    }
                    const defaultTheme: PersonalizationState = { color: 'default', fontName: 'roboto', isOpen: false };
                    localStorage.setItem('theme', JSON.stringify(defaultTheme));
                    return PersonalizationActions.loadPersonalizationSuccess({ personalization: defaultTheme });
                })
            )
        );

        this.$setPersonalizationFont = createEffect(() =>
            this.actions$.pipe(
                ofType(PersonalizationActions.setPersonalizationFont),
                withLatestFrom(this.store.select(PersonalizationSelectors.selectPersonalizationState)),
                map(([action, currentState]) => {
                    const personalization = { ...currentState, fontName: action.fontName };
                    localStorage.setItem('theme', JSON.stringify({ ...personalization, isOpen: false }));
                    return PersonalizationActions.setPersonalization({ personalization });
                })
            )
        );

        this.$setPersonalizationTheme = createEffect(() =>
            this.actions$.pipe(
                ofType(PersonalizationActions.setPersonalizationTheme),
                withLatestFrom(this.store.select(PersonalizationSelectors.selectPersonalizationState)),
                map(([action, currentState]) => {
                    const personalization = { ...currentState, color: action.color };
                    localStorage.setItem('theme', JSON.stringify({ ...personalization, isOpen: false }));
                    return PersonalizationActions.setPersonalization({ personalization });
                })
            )
        );
    }
}
