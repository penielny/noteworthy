import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalizationState } from "./personlization.model";

export const selectPersonalizationState = createFeatureSelector<PersonalizationState>('personalization');

export const selectPersonalizationColor = createSelector(
    selectPersonalizationState,
    (state) => state.color
);
export const selectPersonalizationFont = createSelector(
    selectPersonalizationState,
    (state) => state.fontName
);
export const selectPersonalizationToggle = createSelector(
    selectPersonalizationState,
    (state) => state.isOpen
);

export const selectPersonalization = createSelector(
    selectPersonalizationState,
    (state) => state
);