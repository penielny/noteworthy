import { Notes } from "../interfaces/notes";

export interface NotesState {
    notes: Notes[];
    selectedNote: Notes | null;
    searchTerm: string;
    loading: boolean;
    error: any;
}