import { useState } from 'react'
import { Plus, Trash2, Check } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn unit testing', completed: true },
    { id: 2, text: 'Write E2E tests', completed: false },
    { id: 3, text: 'Set up CI/CD pipeline', completed: false },
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="max-w-2xl mx-auto" data-testid="todo-page">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
          <div className="text-sm text-gray-600" data-testid="todo-stats">
            {completedCount} of {todos.length} completed
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="todo-input"
          />
          <button
            onClick={addTodo}
            className="btn-primary flex items-center gap-2"
            data-testid="add-todo-btn"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="space-y-2" data-testid="todo-list">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 rounded-md border ${
                todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
              }`}
              data-testid={`todo-item-${todo.id}`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex items-center justify-center w-5 h-5 rounded border-2 ${
                  todo.completed
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-green-400'
                }`}
                data-testid={`toggle-todo-${todo.id}`}
              >
                {todo.completed && <Check size={12} />}
              </button>
              <span
                className={`flex-1 ${
                  todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                }`}
                data-testid={`todo-text-${todo.id}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 p-1"
                data-testid={`delete-todo-${todo.id}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="text-center py-8 text-gray-500" data-testid="empty-state">
            No todos yet. Add one above!
          </div>
        )}
      </div>
    </div>
  )
}