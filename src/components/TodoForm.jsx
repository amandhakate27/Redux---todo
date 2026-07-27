import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder-neutral-400 font-medium focus:outline-none focus:bg-neutral-50/50 transition-all text-sm"
        required
      />
      <button
        type="submit"
        className="bg-black hover:bg-neutral-800 text-white font-bold text-sm px-6 py-3 rounded-lg cursor-pointer transform active:scale-[0.98] transition-all"
      >
        Add
      </button>
    </form>
  );
}
