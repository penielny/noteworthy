import { Notes } from "../interfaces/notes";

export const mockNotes: Notes[] = [
  {
    id: 1,
    title: 'Build AI-Powered Apps With Genkit and Angular',
    note: `
    There has never been a better time to start building with AI and the state-of-the-art models available to developers everywhere. Building with AI is for everyone, especially web developers. The Firebase team at Google has just launched the 1.0 version of Genkit for Node.js which means that it is ready for production and ready to help you build the next generation of AI powered applications.

What is Genkit?
Genkit is a framework designed to help you build AI-powered applications and features. It provides open source libraries for Node.js and Go as well as developer tools for testing and debugging. Genkit is designed as a server-side solution.

With that in mind, how can Angular developers leverage Genkit? Let’sl explore some of the architectural options available to you.

Connecting to Genkit in Angular
Because Genkit APIs are designed to be used on the server, it’s recommended to use a Node or Go based backend. For a Node-based backend, the most straightforward involves installing the necessary dependencies (genkit and @genkit-ai/googleai), selecting a model and sending a prompt. Here’s an example:
    `,
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