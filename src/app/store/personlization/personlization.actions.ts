import { createAction, props } from "@ngrx/store";
import { colorScheme, fontName, PersonalizationState } from "./personlization.model";

export const loadPersonalization = createAction('[Personalization] Load Personalization');

export const loadPersonalizationSuccess = createAction(
    '[Personalization] Load Personalization Success',
    props<{ personalization: PersonalizationState }>()
);

export const setPersonalizationTheme = createAction(
    '[Personalization] Set Personalization Theme',
    props<{ color: colorScheme }>()
);

export const getPersonalizationTheme = createAction(
    '[Personalization] Get Personalization Theme',
);

export const setPersonalizationFont = createAction(
    '[Personalization] Set Personalization Font',
    props<{ fontName: fontName }>()
);
export const getPersonalizationFont = createAction(
    '[Personalization] Get Personalization Font',
);

export const getTogglePersonalization = createAction(
    '[Personalization] Get Toggle Personalization',
);
export const togglePersonalization = createAction(
    '[Personalization] Toggle Personalization',
    props<{ isOpen: boolean }>()
);

export const setPersonalization = createAction(
    '[Personalization] Set Personalization',
    props<{ personalization: PersonalizationState }>()
);