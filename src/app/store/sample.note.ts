import { Notes } from "../interfaces/notes";

export const mockNotes: Notes[] = [
  {
    id: 1,
    title: 'First Note',
    note: "Let me know if you'd like help setting up a testable NgRx + standalone app scaffold with mocked state/actions/effects.",
    isFavourite: false,
    isArchived: false,
    tags: []
  },
  {
    id: 2,
    title: 'Second Note',
    note: "Great question! The NgRx Store Devtools are a powerful way to see, debug, and time-travel through your app's state changes — like Redux DevTools for Angular.",
    isFavourite: true,
    isArchived: false,
    tags: []
  },
  {
    id: 3,
    title: 'Archived Note',
    note: "Your reducer logic looks great overall 👏, and your state transitions are well defined.However, I noticed a couple of potential issues and improvements, especially around type consistency and your use of Number(id).",
    isFavourite: false,
    isArchived: true,
    tags: []
  },
  {
    id: 4,
    title: 'Archived Note',
    note: "Would you like me to generate a mock setup with everything wired for you (store + selectors + effects + service + simulated notes)?",
    isFavourite: false,
    isArchived: true,
    tags: []
  }
];