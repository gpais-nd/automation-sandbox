import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoList } from '../../src/pages/TodoList'

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />)
  })

  test('renders todo list with initial todos', () => {
    expect(screen.getByTestId('todo-page')).toBeInTheDocument()
    expect(screen.getByText('Learn unit testing')).toBeInTheDocument()
    expect(screen.getByText('Write E2E tests')).toBeInTheDocument()
    expect(screen.getByTestId('todo-stats')).toHaveTextContent('1 of 3 completed')
  })

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup()
    const input = screen.getByTestId('todo-input')
    const addButton = screen.getByTestId('add-todo-btn')

    await user.type(input, 'New test todo')
    await user.click(addButton)

    expect(screen.getByText('New test todo')).toBeInTheDocument()
    expect(input).toHaveValue('')
    expect(screen.getByTestId('todo-stats')).toHaveTextContent('1 of 4 completed')
  })

  test('adds todo when Enter key is pressed', async () => {
    const user = userEvent.setup()
    const input = screen.getByTestId('todo-input')

    await user.type(input, 'Todo via Enter key{enter}')

    expect(screen.getByText('Todo via Enter key')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  test('does not add empty todo', async () => {
    const user = userEvent.setup()
    const addButton = screen.getByTestId('add-todo-btn')
    const initialCount = screen.getAllByTestId(/^todo-item-/).length

    await user.click(addButton)

    expect(screen.getAllByTestId(/^todo-item-/)).toHaveLength(initialCount)
  })

  test('toggles todo completion status', async () => {
    const user = userEvent.setup()
    const toggleButton = screen.getByTestId('toggle-todo-2')

    await user.click(toggleButton)

    expect(screen.getByTestId('todo-stats')).toHaveTextContent('2 of 3 completed')
  })

  test('deletes a todo', async () => {
    const user = userEvent.setup()
    const deleteButton = screen.getByTestId('delete-todo-1')

    await user.click(deleteButton)

    expect(screen.queryByText('Learn unit testing')).not.toBeInTheDocument()
    expect(screen.getByTestId('todo-stats')).toHaveTextContent('0 of 2 completed')
  })

  test('shows empty state when no todos exist', async () => {
    const user = userEvent.setup()
    
    // Delete all todos
    const deleteButtons = screen.getAllByTestId(/^delete-todo-/)
    for (const button of deleteButtons) {
      await user.click(button)
    }

    expect(screen.getByTestId('empty-state')).toBeInTheDocument()
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument()
  })
})