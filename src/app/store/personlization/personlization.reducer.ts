import { createReducer, on } from "@ngrx/store";
import { PersonalizationState } from "./personlization.model";
import * as PersonalizationActions from "./personlization.actions";

export const initialState: PersonalizationState = {
    isOpen: false,
    color: 'default',
    fontName: 'roboto'
};

export const PersonalizationReducer = createReducer(
    initialState,

    on(PersonalizationActions.loadPersonalization, (state) => ({
        ...state,
    })),

    on(PersonalizationActions.loadPersonalizationSuccess, (state, { personalization }) => ({
        ...state,
        ...personalization
    })),

    on(PersonalizationActions.setPersonalizationTheme, (state, { color }) => ({
        ...state,
        color
    })),

    on(PersonalizationActions.setPersonalizationFont, (state, { fontName }) => ({
        ...state,
        fontName
    })),

    on(PersonalizationActions.togglePersonalization, (state, { isOpen }) => ({
        ...state,
        isOpen
    })),

    on(PersonalizationActions.setPersonalization, (state, { personalization }) => ({
        ...state,
        ...personalization
    })),

)
