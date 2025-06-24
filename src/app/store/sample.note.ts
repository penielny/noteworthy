import { Notes } from "../interfaces/notes";

export const mockNotes: Notes[] = [
  {
    id: 1,
    title: 'First Note',
    note: 'This is your first mock note.',
    isFavourite: false,
    isArchived: false,
    tags:[]
  },
  {
    id: 2,
    title: 'Second Note',
    note: 'Pinned and important!',
    isFavourite: true,
    isArchived: false,
    tags:[]
  },
  {
    id: 3,
    title: 'Archived Note',
    note: 'You archived this one.',
    isFavourite: false,
    isArchived: true,
      tags:[]
  }
];