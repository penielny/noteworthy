export type colorScheme = 'default' | 'dark' | 'purple' | 'pink' | 'blue';
export type fontName = 'roboto'|'serif' | 'sans-serif' | 'monospace';

export interface PersonalizationState {
    isOpen: boolean;
    color: colorScheme;
    fontName: fontName;
}