import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-black py-16 px-4 selection:bg-black selection:text-white">
      <div className="max-w-md mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b-2 border-black pb-4">
          <h1 className="text-2xl font-black tracking-tight uppercase">
            Todo List
          </h1>
        </header>

        {/* Create Task Form */}
        <TodoForm />

        {/* Tasks List */}
        <TodoList />

      </div>
    </div>
  );
}
