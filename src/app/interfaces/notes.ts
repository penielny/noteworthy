export interface Notes {
    userId?: number;
    id: number;
    note: string;
    title: string;
    tags: string[];
    isFavourite: boolean;
    isArchived: boolean;
}
