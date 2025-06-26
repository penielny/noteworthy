export type colorScheme = 'default' | 'dark' | 'purple' | 'pink' | 'blue';
export type fontName = 'inter' | 'noto-serif' | 'source-code';

export interface PersonalizationState {
    isOpen: boolean;
    color: colorScheme;
    fontName: fontName;
}