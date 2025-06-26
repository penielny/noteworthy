import { Notes } from "../../interfaces/notes";


export interface NotesState {
    notes: Notes[];
    tags: string[];
    selectedNote: Notes | null;
    selectedTag: string | null;
    searchTerm: string;
    loading: boolean;
    error: any;
}