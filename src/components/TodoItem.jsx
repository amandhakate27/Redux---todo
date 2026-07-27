import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../features/todos/todoSlice';

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!editText.trim()) return;
    dispatch(updateTodo({ id: todo.id, text: editText.trim() }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`border-2 border-black rounded-lg p-4 bg-white flex items-center justify-between gap-4 transition-all duration-200 ${
      todo.completed ? 'opacity-50 bg-neutral-100' : ''
    }`}>
      {isEditing ? (
        <div className="flex-grow flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow bg-white border border-black rounded px-3 py-1.5 text-black text-sm focus:outline-none"
            required
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-3 py-1.5 rounded cursor-pointer transition-all"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="border border-neutral-300 hover:border-black text-black text-xs font-bold px-3 py-1.5 rounded cursor-pointer transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 min-w-0">
            {/* Custom Checkbox (Mark as done) */}
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`w-5 h-5 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 cursor-pointer transition-all ${
                todo.completed ? 'bg-black text-white' : 'bg-white hover:bg-neutral-100'
              }`}
            >
              {todo.completed && (
                <svg className="w-3.5 h-3.5 stroke-2 stroke-current fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>

            {/* Todo Title */}
            <span className={`font-semibold text-sm break-all ${todo.completed ? 'line-through text-neutral-500' : 'text-black'}`}>
              {todo.text}
            </span>
          </div>

          {/* Action Buttons (Edit & Delete) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs font-bold text-neutral-500 hover:text-black hover:underline cursor-pointer transition-all"
            >
              Edit
            </button>
            <span className="text-neutral-300 text-xs">|</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-xs font-bold text-neutral-500 hover:text-red-600 hover:underline cursor-pointer transition-all"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
