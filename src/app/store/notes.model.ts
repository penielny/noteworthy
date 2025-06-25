import { Notes } from "../interfaces/notes";

export interface NotesState {
    notes: Notes[];
    loading: boolean;
    error: any;
}