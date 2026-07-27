import { createSlice } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem('redux_todos');
    if (serialized === null) {
      return [];
    }
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Error loading todos from localStorage:', err);
    return [];
  }
};

const initialState = {
  items: loadTodosFromLocalStorage(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload;
      state.items.unshift({
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
