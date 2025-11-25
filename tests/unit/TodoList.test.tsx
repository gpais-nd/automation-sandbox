import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoList } from '../../src/pages/TodoList'

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />)
  })

  // ✅ EJEMPLO IMPLEMENTADO - Test básico de renderizado
  test('renders todo list with initial todos', () => {
    expect(screen.getByTestId('todo-page')).toBeInTheDocument()
    expect(screen.getByText('Learn unit testing')).toBeInTheDocument()
    expect(screen.getByText('Write E2E tests')).toBeInTheDocument()
    expect(screen.getByTestId('todo-stats')).toHaveTextContent('1 of 3 completed')
  })

  // ✅ EJEMPLO IMPLEMENTADO - Test de agregar todo
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

  /* TODO: Implementar test case para agregar todo con tecla Enter
   * Debe verificar que al presionar Enter en el input se agregue el todo
   * y se limpie el campo de entrada
   */
  test.skip('adds todo when Enter key is pressed', async () => {
    // const user = userEvent.setup()
    // const input = screen.getByTestId('todo-input')
    // await user.type(input, 'Todo via Enter key{enter}')
    // Implementar test aquí
  })

  /* TODO: Implementar test case para no agregar todos vacíos
   * Debe verificar que no se agreguen todos cuando el input está vacío
   * o solo contiene espacios en blanco
   */
  test.skip('does not add empty todo', async () => {
    // const user = userEvent.setup()
    // const addButton = screen.getByTestId('add-todo-btn')
    // Implementar test aquí
  })

  /* TODO: Implementar test case para cambiar estado de completado
   * Debe verificar que al hacer clic en el botón de toggle
   * se cambie el estado de completado y se actualice el contador
   */
  test.skip('toggles todo completion status', async () => {
    // const user = userEvent.setup()
    // const toggleButton = screen.getByTestId('toggle-todo-2')
    // Implementar test aquí
  })

  /* TODO: Implementar test case para eliminar todo
   * Debe verificar que al hacer clic en el botón de eliminar
   * se remueva el todo de la lista y se actualice el contador
   */
  test.skip('deletes a todo', async () => {
    // const user = userEvent.setup()
    // const deleteButton = screen.getByTestId('delete-todo-1')
    // Implementar test aquí
  })

  /* TODO: Implementar test case para estado vacío
   * Debe verificar que cuando no hay todos se muestre el mensaje
   * "No todos yet. Add one above!" en el estado vacío
   */
  test.skip('shows empty state when no todos exist', async () => {
    // const user = userEvent.setup()
    // Eliminar todos los todos y verificar estado vacío
    // Implementar test aquí
  })

  /* TODO: Implementar test case para validar texto tachado en todos completados
   * Debe verificar que los todos completados tengan la clase line-through
   * y los no completados no la tengan
   */
  test.skip('applies strikethrough style to completed todos', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para contador de todos completados
   * Debe verificar que el contador muestre correctamente
   * "X of Y completed" cuando se agregan/completan/eliminan todos
   */
  test.skip('updates completed count correctly', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })

  /* TODO: Implementar test case para trim de espacios en blanco
   * Debe verificar que se eliminen espacios al inicio y final
   * del texto del todo al agregarlo
   */
  test.skip('trims whitespace from todo text', async () => {
    // const user = userEvent.setup()
    // Implementar test aquí
  })
})