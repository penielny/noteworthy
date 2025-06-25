import { Notes } from "../interfaces/notes";

export interface NotesState {
    notes: Notes[];
    selectedNote: Notes | null;
    loading: boolean;
    error: any;
}