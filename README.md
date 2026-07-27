# Minimalist Black & White Todo List

A clean, high-contrast, monochrome Todo List application built using React, Vite, and Tailwind CSS.

## State Management

This project uses **Redux Toolkit** and **React-Redux** for robust and predictable state management:

1. **Redux Store (`src/app/store.js`)**:
   - Manages the global state of the application.
   - Subscribes to changes in the store to automatically synchronize and persist tasks in the browser's `localStorage` under the key `redux_todos`.

2. **Todo Slice (`src/features/todos/todoSlice.js`)**:
   - Uses `createSlice` from Redux Toolkit to define actions and reducers.
   - **Initial State**: Automatically loads tasks from `localStorage` if they exist.
   - **Actions**:
     - `addTodo`: Creates a new task with a unique ID and `text` title.
     - `deleteTodo`: Removes a task by ID.
     - `updateTodo`: Updates the text title of a task.
     - `toggleTodo`: Inverts the completion status of a task.
     - `clearCompleted`: Removes all completed tasks.

3. **React-Redux Connection (`src/main.jsx` and components)**:
   - Connected to the React tree using the `<Provider>` component.
   - Uses `useSelector` to read todo items from the store.
   - Uses `useDispatch` to trigger actions (Add, Update, Delete, Toggle).

