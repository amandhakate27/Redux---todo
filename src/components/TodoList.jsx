import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <div className="space-y-3">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <div className="border-2 border-dashed border-neutral-300 rounded-lg py-12 px-4 text-center">
          <p className="text-neutral-400 text-sm font-medium">No tasks yet. Add one above to get started!</p>
        </div>
      )}
    </div>
  );
}
