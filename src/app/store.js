import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Subscribe to store changes to save todos to localStorage
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('redux_todos', JSON.stringify(state.todos.items));
  } catch (err) {
    console.error('Error saving todos to localStorage:', err);
  }
});
